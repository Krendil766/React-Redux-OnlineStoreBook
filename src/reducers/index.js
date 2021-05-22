import ACTIONSTYPES from "../ActionsTypes";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [

    ],
    orderTotal: 220
}
const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (book, item = {}, number) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + number,
        total: total + number * book.price
    }
}
const findItem = (state, id, number) => {
    const { cartItems, books } = state;
    const bookId = id;
    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, number)
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONSTYPES.FETCH_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ACTIONSTYPES.FETCH_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload
            };
        case ACTIONSTYPES.FETCH_BOOK_SUCCESS:
            return {
                ...state,
                error: action.payload,
            };

        case ACTIONSTYPES.BOOK_ADDED_TO_CART:
            return findItem(state, action.payload, 1);

        case ACTIONSTYPES.BOOK_DELETE_TO_CART:
            const itemFind = state.cartItems.find(({ id }) => id === action.payload);
            return findItem(state, action.payload, -itemFind.count);

        case ACTIONSTYPES.BOOK_MINUS_TO_CART:
            return findItem(state, action.payload, -1);

        default:
            return state;
    }
}

export default reducer
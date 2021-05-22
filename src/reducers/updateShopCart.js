import ACTIONSTYPES from '../ActionsTypes';

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
    const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;
    const bookId = id;
    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, number);
    const allTotal = cartItems.reduce((count, item) => {
        return count += item.total
    }, 0)

    return {
        ...state,
        orderTotal: allTotal,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateShopCart = (state, action) => {
    console.log(state);
    if (state === undefined) {
        return {
            ...state,
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case ACTIONSTYPES.BOOK_ADDED_TO_CART:
            return findItem(state, action.payload, 1);

        case ACTIONSTYPES.BOOK_DELETE_TO_CART:
            const itemFind = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return findItem(state, action.payload, -itemFind.count);

        case ACTIONSTYPES.BOOK_MINUS_TO_CART:
            return findItem(state, action.payload, -1);

        default:
            return state.shoppingCart;
    }
}
export default updateShopCart;
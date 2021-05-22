import ACTIONSTYPES from "../ActionsTypes"

const booksLoaded = (payload) => {

    return async (dispatch) => {

        dispatch({
            type: ACTIONSTYPES.FETCH_BOOK_REQUEST,
        })

        try {
            dispatch({
                type: ACTIONSTYPES.FETCH_BOOK_SUCCESS,
                payload: await payload.then(data => data)
            })
        } catch (err) {
            dispatch({
                type: ACTIONSTYPES.FETCH_BOOK_FAILURE,
                payload: err.message
            })
        }
    }
}
const bookAddedToCart = (payload) => {
    return {
        type: ACTIONSTYPES.BOOK_ADDED_TO_CART,
        payload
    }
}
const bookMinusToCart = (payload) => {
    return {
        type: ACTIONSTYPES.BOOK_MINUS_TO_CART,
        payload
    }
}
const bookDeleteToCart = (payload) => {
    return {
        type: ACTIONSTYPES.BOOK_DELETE_TO_CART,
        payload
    }
}

const fetchBooks = (services, dispatch) => () => {
    const data = services.getBooks();
    dispatch(booksLoaded(data));
}

export {
    booksLoaded,
    fetchBooks,
    bookAddedToCart,
    bookMinusToCart,
    bookDeleteToCart
}
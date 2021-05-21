import ACTIONSTYPES from "../ActionsTypes"

const booksLoaded = (payload) => {
    return {
        type: ACTIONSTYPES.BOOK_LOADED,
        payload
    }
}


export {
    booksLoaded
}
import { booksLoaded } from "../actions";
import ACTIONSTYPES from "../ActionsTypes";

const initialState = {
    books: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONSTYPES.BOOK_LOADED:
            return {
                books: action.payload
            };

        default:
            return state;
    }
}

export default reducer
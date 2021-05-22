import ACTIONSTYPES from '../ActionsTypes';


const updateBookList = (state, action) => {
    if (state === undefined) {
        return {
            ...state,
          books: [],
          loading: true,
          error: null
        };
      }
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

        default:
            return state.bookList;;
    }
}
export default updateBookList;
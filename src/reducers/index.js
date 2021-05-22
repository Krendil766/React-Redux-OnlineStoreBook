
import updateShopCart from "./updateShopCart";
import updateBookList from "./updateBookList";



const reducer = (state, actioan) => {
    return {
        bookList: updateBookList(state, actioan),
        shoppingCart: updateShopCart(state, actioan)
    }
}

export default reducer
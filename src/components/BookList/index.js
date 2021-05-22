/* import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { booksLoaded } from '../../actions'
import { withBookServices } from '../HOC'
import BookListItem from "../BookListItem";
import './style.css';

const BookList = ({ services }) => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
    useEffect(() => {
        dispatch(booksLoaded(services.getBooks()))
    }, [dispatch]);

    console.log(books);

    return (
        <ul>
            {books.map((item) => {
                return (
                    <li key={item.id}>
                        <BookListItem book={item} />
                    </li>
                )
            })}
        </ul>
    )
}

export default withBookServices()(BookList); */

import BookListItem from "../BookListItem";
import './style.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.map((item) => {
                return (
                    <li key={item.id}>
                        <BookListItem
                            book={item}
                            onAddedToCart={() => onAddedToCart(item.id)} />
                    </li>
                )
            })}
        </ul>
    )
}
export default BookList;
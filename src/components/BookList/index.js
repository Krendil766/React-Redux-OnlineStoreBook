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

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { booksLoaded } from '../../actions'
import { withBookServices } from '../HOC'
import BookListItem from "../BookListItem";
import compose from '../../utils'
import './style.css';


class BookList extends Component {
    componentDidMount() {
        const { services } = this.props;
        const data = services.getBooks();
        this.props.booksLoaded(data);
    }
    render() {
        const { books } = this.props;
        console.log(books);

        return (
            <ul className="book-list">
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
}

const mapStateToProps = (state) => {
    return { books: state.books };
};
const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookServices(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookList)

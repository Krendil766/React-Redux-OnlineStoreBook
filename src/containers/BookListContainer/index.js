import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../../components/ErrorIndicator';
import Spinner from '../../components/Spinner';
import BookList from '../../components/BookList';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookServices } from '../../components/HOC';
import compose from '../../utils';

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (error) {
            return <ErrorIndicator error={error} />
        }
        if (loading) {
            return <Spinner />
        }
        return (
            <BookList books={books} onAddedToCart={onAddedToCart} />
        )
    }
}

const mapStateToProps = ({ books, error, loading }) => {
    return {
        books,
        error,
        loading
    };
};
const mapDispatchToProps = (dispatch, { services }) => {
    return {
        fetchBooks: fetchBooks(services, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }

}

export default compose(
    withBookServices(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookListContainer)

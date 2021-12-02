import React from "react";
import {connect} from "react-redux";
import {
    changeSearchText, setBooks,
    selectCategory, selectSortBy, moreBooks, toggleIsFetching
} from '../Redux/Reducers/booksReducer';
import Books from "./Books";
import {booksAPI} from "../Api/api";

class BooksContainer extends React.Component {

    onButton = () => {
        let subject
        this.props.subject === 'all' ? subject = '}' : subject = ',subject:' + this.props.subject + '}'
        let title_subject = `{title:${this.props.newBooksText}${subject}`
        this.props.setBooks([], null)
        if (this.props.newBooksText.trim() === '') {
            alert('Введите подзаголовок перед поиском')
        } else {
            this.props.toggleIsFetching(true)
            booksAPI.getBooks(title_subject, this.props.sortBy, 0)
                .then((response) => {
                    this.props.toggleIsFetching(false)
                    if (response.totalItems === 0) {
                        this.props.setBooks([], response.totalItems)
                    } else {
                        this.props.setBooks(response.items, response.totalItems)
                    }
                })
        }
    }

    onMoreBooksButton = () => {
        let subject
        this.props.subject === 'all' ? subject = '}' : subject = ',subject:' + this.props.subject + '}'
        let title_subject = `{title:${this.props.newBooksText}${subject}`
        this.props.toggleIsFetching(true)
        booksAPI.getBooks(title_subject, this.props.sortBy, this.props.startIndex + 30)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.moreBooks(response.items)
            })
    }

    render() {
        return <Books
            newSearchText={this.props.newBooksText} resultsCount={this.props.resultsCount}
            pressEnter={this.props.pressEnter} changeSearchText={this.props.changeSearchText}
            selectCategory={this.props.selectCategory} selectSortBy={this.props.selectSortBy}
            subject={this.props.subject} onButton={this.onButton} books={this.props.books}
            startIndex={this.props.startIndex} onMoreBooksButton={this.onMoreBooksButton}
            isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => ({

    newBooksText: state.booksPage.newBooksText,
    resultsCount: state.booksPage.resultsCount,
    subject: state.booksPage.subject,
    sortBy: state.booksPage.sortBy,
    books: state.booksPage.books,
    startIndex: state.booksPage.startIndex,
    isFetching: state.booksPage.isFetching

})

let mapDispatchToProps = (dispatch) => ({

    moreBooks: (books) => {
        dispatch(moreBooks(books))
    },
    setBooks: (books, resultsCount) => {
        dispatch(setBooks(books, resultsCount))
    },
    changeSearchText: (e) => {
        dispatch(changeSearchText(e.target.value))
    },
    selectCategory: (e) => {
        dispatch(selectCategory(e.target.value));
    },
    selectSortBy: (e) => {
        dispatch(selectSortBy(e.target.value));
    },
    toggleIsFetching: (isFetching) => {
        dispatch(toggleIsFetching(isFetching))
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
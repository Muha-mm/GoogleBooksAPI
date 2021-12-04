import React from "react";
import {connect} from "react-redux";
import {
    changeSearchText,
    setBooks,
    getBooks,
    getMoreBooks,
    selectSortBy,
    selectCategory
} from '../Redux/Reducers/booksReducer';
import Books from "./Books";

class BooksContainer extends React.Component {

    onButton = () => {
        let subject
        this.props.subject === 'all' ? subject = '}' : subject = ',subject:' + this.props.subject + '}'
        let title_subject = `{title:${this.props.newBooksText}${subject}`
        this.props.setBooks([], null)

        this.props.newBooksText.trim() === ''?
            alert('Введите подзаголовок перед поиском'):
            this.props.getBooks(title_subject, this.props.sortBy)
    }

    onMoreBooksButton = () => {
        let subject
        this.props.subject === 'all' ? subject = '}' : subject = ',subject:' + this.props.subject + '}'
        let title_subject = `{title:${this.props.newBooksText}${subject}`

        this.props.getMoreBooks(title_subject, this.props.sortBy, this.props.startIndex)
    }

    render() {
        return <Books {...this.props} onButton={this.onButton} onMoreBooksButton={this.onMoreBooksButton}/>
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

export default connect(mapStateToProps,
    {setBooks, changeSearchText, getBooks, getMoreBooks, selectSortBy, selectCategory})
(BooksContainer)
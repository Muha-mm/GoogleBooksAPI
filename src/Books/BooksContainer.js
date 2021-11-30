import React from "react";
import {connect} from "react-redux";
import {changeSearchText, setBooks,
    selectCategory, selectSortBy, moreBooks, toggleIsFetching} from '../Redux/Reducers/booksReducer';
import Books from "./Books";
import {booksAPI} from "../Api/api";

class BooksContainer extends React.Component{

    onButton = ()=>{
        this.props.newBooksText.trim() === ''?alert('Введите название перед поиском') :
        booksAPI.getBooks(this.props.newBooksText, this.props.subject, this.props.sortBy, 0)
            .then((response)=>{
                debugger
                if (response.totalItems === 0){
                this.props.setBooks([], response.totalItems)}
            else{
                    this.props.setBooks(response.items, response.totalItems)
                }})
    }

    onMoreBooksButton = () => {
        this.props.toggleIsFetching(true)
            booksAPI.getBooks(this.props.newBooksText, this.props.subject, this.props.sortBy, this.props.startIndex+30)
                .then((response)=>{
                    this.props.toggleIsFetching(false)
                    this.props.moreBooks(response.items)
                })
    }
    render() {
        return <Books
            newSearchText = {this.props.newBooksText} resultsCount = {this.props.resultsCount}
            pressEnter = {this.props.pressEnter} changeSearchText = {this.props.changeSearchText}
            selectCategory = {this.props.selectCategory} selectSortBy = {this.props.selectSortBy}
            subject = {this.props.subject} onButton = {this.onButton} books = {this.props.books}
            startIndex = {this.props.startIndex} onMoreBooksButton = {this.onMoreBooksButton}
            isFetching = {this.props.isFetching}
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

let mapDispatchToProps = (dispatch) =>({

    moreBooks:(books)=>{dispatch(moreBooks(books))},
    setBooks:(books, resultsCount)=>{dispatch(setBooks(books, resultsCount))},
    changeSearchText:(e)=>{dispatch(changeSearchText(e.target.value))},
    selectCategory:(e)=>{ dispatch(selectCategory(e.target.value));},
    selectSortBy:(e)=>{dispatch(selectSortBy(e.target.value));},
    toggleIsFetching:(isFetching)=>{dispatch(toggleIsFetching(isFetching))}

})


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
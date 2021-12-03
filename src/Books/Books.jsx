import React from "react";
import c from './Books.module.css'
import Book from "./Book/Book";
import Search from "./Search/Search";
import MoreBooks from "./MoreBooks/MoreBooks";
import Preloader from "../assets/Preloader/Preloader";

const Books = (props) => {

    let booksElements = props.books.map((b)=>{
        return <Book key = {b.id} title = {b.volumeInfo.title}
                     authors ={b.volumeInfo.authors} id = {b.id}
            subject={b.volumeInfo.categories===undefined ? 'not found': b.volumeInfo.categories[0]}
                     photo = {b.volumeInfo.imageLinks===undefined ? null : b.volumeInfo.imageLinks.thumbnail}/>
    })

    return (
        <div className={c.booksPage}>
                <Search newSearchText = {props.newSearchText} resultsCount = {props.resultsCount}
                        pressEnter = {props.pressEnter} changeSearchText = {props.changeSearchText}
                        selectCategory = {props.selectCategory} selectSortBy = {props.selectSortBy}
                        onButton = {props.onButton} isFetching = {props.isFetching}
                />

                <div className={c.books}>{booksElements}</div>

                <div>
                    { (props.isFetching && props.resultsCount !==null) ?
                        <div className={c.preloader}><Preloader/></div> :
                        (props.resultsCount < 30 || props.resultsCount === 0 ||
                            props.resultsCount-props.startIndex<30) ?
                            null : <MoreBooks onButton = {props.onMoreBooksButton}/>}
                </div>
        </div>
    )
}

export default Books

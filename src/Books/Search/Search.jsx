import React from "react";
import c from './Search.module.css'
import Selects from "./Selects/Selects";
import Preloader from "../../assets/Preloader/Preloader";
const Search = (props) => {
    return (
        <div className={c.search}>

            <div className={c.title}>Search for books</div>

            <form >
                <textarea placeholder="Search here..."
                          required
                       onKeyPress={(e)=>
                           {if (e.key === 'Enter'){props.onButton(); e.preventDefault()}}}
                       value={props.newBooksText}
                       onChange={props.changeSearchText}
                       />
                    <button onClick={props.onButton} type="button" className={c.SButton}> > </button>
            </form>


            <Selects selectCategory = {props.selectCategory} selectSortBy = {props.selectSortBy}/>
            <hr className={c.hr}/>


            {props.isFetching && props.resultsCount === null?<Preloader/>:
                props.resultsCount===null?null:
                <p className={c.results}>results: {props.resultsCount}</p>}
        </div>
    )
}

export default Search

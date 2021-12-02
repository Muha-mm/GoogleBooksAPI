import React from "react";
import c from './Search.module.css'
import Selects from "./Selects/Selects";
import Preloader from "../../assets/Preloader/Preloader";
const Search = (props) => {
    return (
        <div className={c.search}>

            <h1>Search for books</h1>

            <form >
                <textarea placeholder="Search here..."
                          required
                       onKeyPress={(e)=>
                           {if (e.key === 'Enter'){props.onButton(); e.preventDefault()}}}
                       value={props.newSearchText}
                       onChange={props.changeSearchText}
                       />
                    <button onClick={props.onButton} type="button" className={c.SButton}> > </button>
            </form>


            <Selects selectCategory = {props.selectCategory} selectSortBy = {props.selectSortBy}/>


            {props.isFetching && props.resultsCount === null?<Preloader/>:
                props.resultsCount===null?null:
                <p className={c.results}>results: {props.resultsCount}</p>}
        </div>
    )
}

export default Search

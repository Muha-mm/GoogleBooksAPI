import React from "react";
import c from './Selects.module.css'
const Selects = (props) => {
    return (
        <div className={c.selects}>

            <div className={c.category}>
                <span>Categories </span>
                <select name="categories" onChange={props.selectCategory}>
                    <option value="all">all</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
            </div>

            <div className={c.sortBy}>
                <span>Sorting by </span>

                <select name="sortBy" onChange={props.selectSortBy}>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>


        </div>
    )
}

export default Selects

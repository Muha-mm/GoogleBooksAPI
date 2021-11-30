import React from "react";
import c from './MoreBooks.module.css'

let MoreBooks = (props) =>{
    return (
        <div className={c.moreBooks}>
            <button
                onClick={props.onButton}
                className={c.loadMoreBooks}>
                more books!
            </button>
        </div>
    )
}

export default MoreBooks
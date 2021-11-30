import React from "react";
import c from './Book.module.css'
import {NavLink} from "react-router-dom";
const Book = (props) => {
    return (
        <div className={c.book}>
            <div className={c.image}>
                <NavLink to={`${props.id}`}>
                    <img src={props.photo===null? null : props.photo}/>
                </NavLink>
            </div>

            <div className={c.info}>

                <div className={c.category}>
                    {props.subject}
                </div>

                <NavLink to={`${props.id}`}>
                    <h2 className={c.name}>
                        {props.title}
                    </h2>
                </NavLink>

                <div className={c.author}>
                    {props.authors}
                </div>
            </div>
        </div>
    )
}

export default Book

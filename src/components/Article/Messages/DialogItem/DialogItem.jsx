import React from 'react';
import C from './../Messages.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={C.userItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
import React from 'react';
import C from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Frlist from './List/Friendslist';

const Nav = (props) => {
    
    // let friendElem = props.navState.friendData.map( (friend)=> <Frlist name={friend.name}/>);

    return (
        <nav className={C.nav}>
            <div className={C.sidebar_border}>
                <div className={C.item}>
                    <NavLink to="/profile" activeClassName={C.activeLink}>Profile</NavLink>
                </div>
                <div className={C.item}>
                    <NavLink to="/messages" activeClassName={C.activeLink}>Messages</NavLink>
                </div>
                <div className={C.item}>
                    <NavLink to="/news" activeClassName={C.activeLink}>News</NavLink>
                </div>
                <div className={C.item}>
                    <NavLink to="/settings" activeClassName={C.activeLink}>Settings</NavLink>
                </div>
                <div className={C.item}>
                    <NavLink to="/friends" activeClassName={C.activeLink}>Friends</NavLink>
                    {/* <div>{friendElem}</div> */}
                </div>
                <div className={C.item}>
                    <NavLink to="/users" activeClassName={C.activeLink}>Find users</NavLink>
                </div>
            </div>
        </nav>
    )
}


export default Nav; 
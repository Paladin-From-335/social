import React from 'react';
import C from './Header.module.css';
const Header = () => {
    return (
        <header className={C.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png" alt="" />
            <input type="text" className={C.search} placeholder="search" />
            <button className={C.logout}>Log Out</button>
        </header>
    )
}

export default Header; 
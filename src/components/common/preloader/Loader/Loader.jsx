import React from 'react';
import C from './Loader.module.css';

const Loader = (props) => {
    return (
        <div className={C.animations}>
            <div className={C.first}>
                <div className={C.loader}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export default Loader;
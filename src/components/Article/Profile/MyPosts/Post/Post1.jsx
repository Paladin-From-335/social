import React from 'react';
import C from './Post.module.css'

const Post = (props) => {


    return (
        <div className={`${C.item} ${C.active}`}>
            <img src="https://kinpet.ru/upload/medialibrary/ae2/grustnyy-kotik.jpg" alt="Loading..." />
            {props.message}
            <div>
                <span className={C.like}>like: </span>{props.like} 
            </div>
        </div>

    )
}

export default Post; 
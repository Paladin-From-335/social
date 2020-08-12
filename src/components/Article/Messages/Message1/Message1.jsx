import React from 'react';
import C from './../Messages.module.css'


const MessageItem = (props) => {
    return (
        <div className={C.messageItem}>{props.message}</div>
    )
}

export default MessageItem;
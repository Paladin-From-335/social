import React from 'react';
import C from './Messages.module.css'
import MessageItem from './Message1/Message1';
import DialogItem from './DialogItem/DialogItem';

const Messages = (props) => {

let messagesState = props.dialogsPage;
let userElem = messagesState.usersData.map( (dialog)=> <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
let messageElem = messagesState.messageData.map( (message)=> <MessageItem message={message.message} key={message.id}/>);
let newMessageBody = messagesState.newMessageBody;

// let newMessageElement = React.createRef();

let onSendMessageClick = () => {
  props.sendMessage();
}
let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.updateNewMessageBody(body);
}

    return (
        <article className={C.article}>
            <div className={C.users}>
                {userElem} 
            </div>
            <div className={C.messages}>
                <div>{messageElem}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
                
            </div>
        </article>
    )
}

export default Messages;
import React from 'react';
import s from '../Dialogs.module.css'


const Message = (props) => {

    const newMessageElement =  React.createRef();

    const addMessage = () => {
        const newMessage = newMessageElement.current.value;
        alert(newMessage);
    }

    return (
        <>
            <div className={s.dialog}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
};

export default Message;
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/messageReducer";
import Messages from "./messages";

let MessagesContainer = (props) => {
    debugger;
    let store = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return <Messages onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick}
                     friends={store.friendsData.friends} messages={store.messageData.messages}
                     newMessageBody={store.messageData.newMessageBody}/>
}

export default MessagesContainer
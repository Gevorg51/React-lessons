import React from "react";
import FriendsItem from './MessagesItem/friendsItem';
import styles from './message.module.css'
import MessagesItem from "./MessagesItem/messagesItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/messageReducer";

let Messages = (props) => {
    const friendItem = props.friendsData.friends.map(
        el => <FriendsItem name={el.name} id={el.id} />
    )

    const messageItem = props.messageData.messages.map(
        mess => <MessagesItem message={mess.message} id={mess.id} />
    )

    let newMessageBody = props.messageData.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={styles.friends_Messages_Item}>
            <div className={styles.friendsList}>
                {friendItem}
            </div>

            <div className={styles.messages_Item}>
                <div className={styles.messagesList}>
                    {messageItem}
                </div>
            </div>

            <div>
                <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Add New Text Here...'}/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Messages
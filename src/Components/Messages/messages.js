import React from "react";
import FriendsItem from './MessagesItem/friendsItem';
import styles from './message.module.css'
import MessagesItem from "./MessagesItem/messagesItem";

let Messages = (props) => {
    const friendItem = props.friends.map(
        el => <FriendsItem name={el.name} id={el.id} />
    )
    debugger

    const messageItem = props.messages.map(
        mess => <MessagesItem message={mess.message} id={mess.id} />
    )

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.onNewMessageChange(body);
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
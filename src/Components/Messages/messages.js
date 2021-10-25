import React from "react";
import FriendsItem from './MessagesItem/friendsItem';
import styles from './message.module.css'
import MessagesItem from "./MessagesItem/messagesItem";
import { addNewMessagesActionCreator, addTextActionCreator } from "../../state/state";

let Messages = (props) => {
    const friendItem = props.friendsData.friends.map(
        el => <FriendsItem name={el.name} id={el.id} />
    )

    const messageItem = props.messageData.messages.map(
        mess => <MessagesItem message={mess.message} id={mess.id} />
    )

    let path = React.createRef()

    let addMessages = () => {
        props.dispatch(addNewMessagesActionCreator())
    }

    let addMessagesText = () => {
        let newText = path.current.value;
        props.dispatch(addTextActionCreator(newText))
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
                <textarea ref={path} onChange={addMessagesText} value={props.messageData.newMessagesText} ></textarea>
            </div>
            <div>
                <button onClick={addMessages}>Send</button>
            </div>
        </div>
    )
}

export default Messages
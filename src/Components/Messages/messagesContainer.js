import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/messageReducer";
import Messages from "./messages";
import {connect} from "react-redux";

//
// let MessagesContainer = (props) => {
//     let store = props.store.getState();
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//
//     return <Messages onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick}
//                      friends={store.friendsData.friends} messages={store.messageData.messages}
//                      newMessageBody={store.messageData.newMessageBody}/>
// }

let mapStateToProps = (state) => {
    return {
        friends: state.friendsData.friends,
        messages: state.messageData.messages,
        newMessageBody: state.messageData.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        }
    }
}


let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
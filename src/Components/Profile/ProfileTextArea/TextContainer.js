import React from 'react';
import { connect } from 'react-redux';
import { addCommentActionCreator, addNewTextActionCreator } from '../../../state/commentsData-reducer'
import Text from "./Text";

// let TextContainer = (props) => {
//     debugger;
//     let store = props.store.getState();

//     let onAddComment = () => {
//         props.store.dispatch(addCommentActionCreator())
//     };

//     let onNewComment = (text) => {
//         props.store.dispatch(addNewTextActionCreator(text))
//     }

//     return (
//         <div>
//             <Text addNewText={onNewComment} addComment={onAddComment}
//                   comments={store.commentsData.comments}
//                   newCommentText={store.commentsData.newCommentText}
//             />
//         </div>
//     )
// }


let mapStateToProps = (state) => {
    return {
        comments: state.commentsData.comments,
        newCommentText: state.commentsData.newCommentText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentActionCreator())
        },
        addNewText: (text) => {
            dispatch(addNewTextActionCreator(text))
        }
    }
}

const TextContainer = connect(mapStateToProps, mapDispatchToProps)(Text);

export default TextContainer;
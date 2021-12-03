import React from 'react';
import { addCommentActionCreator, addNewTextActionCreator } from '../../../state/commentsData-reducer'
import Text from "./Text";

let TextContainer = (props) => {
    debugger;
    let store = props.store.getState();

    let onAddComment = () => {
        props.store.dispatch(addCommentActionCreator())
    };

    let onNewComment = (text) => {
        props.store.dispatch(addNewTextActionCreator(text))
    }

    return (
        <div>
            <Text addNewText={onNewComment} addComment={onAddComment}
                  comments={store.commentsData.comments}
                  newCommentText={store.commentsData.newCommentText}
            />
        </div>
    )
}

export default TextContainer;
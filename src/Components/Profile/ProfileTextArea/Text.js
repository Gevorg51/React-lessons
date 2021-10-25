import React from 'react';
import styles from './text.module.css';
import Comments from './../Comments/comments';
import { addCommentActionCreator, addNewTextActionCreator } from '../../../state/state'

let Text = (props) => {
    let commentData = props.commentsData.comments.map(
        el => <Comments id={el.id} comment={el.comment} likes={el.likes} />
    )
    let message = React.createRef();

    let addComment = () => {
        props.dispatch(addCommentActionCreator())
    };
    debugger;

    let onNewComment = () => {
        let text = message.current.value;
        props.dispatch(addNewTextActionCreator(text))
    }

    return (
        <div>
            <div className={styles.texts}>
                <div>
                    <textarea ref={message} onChange={onNewComment} value={props.newCommentText} />
                </div>
                <div>
                    <button onClick={addComment} className={styles.button}>Send</button>
                </div>
            </div>

            <div>
                <p>{commentData}</p>
            </div>
        </div>
    )
}

export default Text;
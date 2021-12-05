import React from 'react';
import styles from './text.module.css';
import Comments from './../Comments/comments';

let Text = (props) => {
    let commentData = props.comments.map(
        el => <Comments id={el.id} comment={el.comment} likes={el.likes} />
    )

    let onAddComment = () => {
        props.addComment()
    };

    let message = React.createRef();

    let onNewComment = () => {
        let text = message.current.value;
        props.addNewText(text);
    }

    return (
        <div>
            <div className={styles.texts}>
                <div>
                    <textarea ref={message} onChange={onNewComment} value={props.newCommentText} />
                </div>
                <div>
                    <button onClick={onAddComment} className={styles.button}>Send</button>
                </div>
            </div>

            <div>
                <p>{commentData}</p>
            </div>
        </div>
    )
}

export default Text;
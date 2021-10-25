import React from "react";
import styles from './comments.module.css'

let Comments = (props) => {
    // debugger;
    
    return(
        <div className={styles.commentSection}>
            <div>
                <img className={styles.avatar} src='https://64.media.tumblr.com/36d77f61ef18bbe9ce64a1995b90e69f/1812e05d22fb3986-f6/s250x400/b4f394d6e3783632ba7d4022792ba76542a07cbb.png' alt='avatar'></img>
            </div>
            <p className={styles.comment}>{props.comment}</p>
            <div>
                <span className={styles.likes}>{props.likes}likes</span>
            </div>

        </div>
    )
}

export default Comments;
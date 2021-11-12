import React from "react";
import styles from "./postData.module.css"

let PostsData = (props) => {
    return (
        <div>
            <div className={styles.postData}>
                <p className={styles.posts}>{props.post}</p>
                <div>
                    <span className={styles.likes}>{props.likes} likes</span>
                </div>
            </div>
        </div>
    )
}

export default PostsData;
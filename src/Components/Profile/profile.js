import React from "react";
import styles from './profile.module.css';
import Text from './ProfileTextArea/Text';
// import Comments from './Comments/comments'

let Profile = (props) => {
    // let commentData = props.state.comments.map(
    //     el => <Comments id={el.id} comment={el.comment} likes={el.likes}/>
    // )
   
    return (
        <div>
            <div>
                <img className={styles.avatar} src='https://64.media.tumblr.com/36d77f61ef18bbe9ce64a1995b90e69f/1812e05d22fb3986-f6/s250x400/b4f394d6e3783632ba7d4022792ba76542a07cbb.png' alt='avatar' />
            </div>

            <div className={styles.profileName}>
                <h2>Gev</h2>
            </div>
            
            <div>
                <Text dispatch={props.dispatch} commentsData={props.commentsData} newCommentText={props.commentsData.newCommentText} />            
                {/* {commentData} */}

            </div>
        </div>
    )
}

export default Profile
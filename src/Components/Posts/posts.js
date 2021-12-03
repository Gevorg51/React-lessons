import React from "react";
import PostsData from "./postsData/postsData"

let Posts = (props) => {
    debugger;
    let postData = props.state.posts.map(
        el => <PostsData id={el.id} post={el.post} likes={el.likes} />
    )

    return (
        <div>
            {postData}
        </div>
    )
}

export default Posts;
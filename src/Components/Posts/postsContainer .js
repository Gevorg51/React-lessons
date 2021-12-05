import React from "react";
import Posts from './posts'

let PostsContainer = (props) => {
    let store = props.store.getState()

    return (
        <div>
            <Posts postsData={store.postsData.posts}/>
        </div>
    )
}

export default PostsContainer;
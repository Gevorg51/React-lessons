import React from "react";
import Posts from './posts'
import {connect} from "react-redux";
//
// let PostsContainer = (props) => {
//     let store = props.store.getState()
//
//     return (
//         <div>
//             <Posts postsData={store.postsData.posts}/>
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
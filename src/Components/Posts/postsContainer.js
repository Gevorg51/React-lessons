import React from "react";
import Posts from './posts'
import {connect} from "react-redux";

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
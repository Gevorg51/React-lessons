import PostsCls from "./postsCls";
import { connect } from "react-redux";
import { postsAC } from "../../state/postData-reducer";

let mapStateToProps = (state) => {
    return {
        postsData: state.postsData.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(postsAC(posts))
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCls);

export default PostsContainer;
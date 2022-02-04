import React from "react";
import { connect } from "react-redux";
import { postsAC, setCurrentPageAC, isFetchedAC} from "../../state/postData-reducer";
import Loader from "../common/loader/loader";
import Posts from "./posts";
import * as axios from 'axios';


class PostsCls extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.currentPage}&count${this.props.pagesSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setPosts(response.data)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${pageNumber}&count${this.props.pagesSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setPosts(response.data)
        });
    }

    render() {
        return <>
            {this.props.isFetched ? <Loader /> : null}
            <Posts totalPostsCount={this.props.totalPostsCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                postsData={this.props.postsData}
                onPageChange={this.onPageChange} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        postsData: state.postsData.posts,
        pagesSize: state.postsData.pagesSize,
        totalPostsCount: state.postsData.totalPostsCount,
        currentPage: state.postsData.currentPage,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setPosts: (posts) => {
//             dispatch(postsAC(posts))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setFetching: (isFetched) => {
//             dispatch(isFetchedAC(isFetched))
//         },
//     }
// }

let PostsContainer = connect(mapStateToProps, {
        setPosts: postsAC,
        setCurrentPage: setCurrentPageAC,
        setFetching: isFetchedAC,
        },
)(PostsCls);

export default PostsContainer;
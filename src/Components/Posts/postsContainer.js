import React from "react";
import { connect } from "react-redux";
import { postsAC } from "../../state/postData-reducer";
import { setCurrentPageAC } from "../../state/postData-reducer";
import Posts from "./posts";
import * as axios from 'axios';


class PostsCls extends React.Component {
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.currentPage}&count${this.props.pagesSize}`).then(response => {
            this.props.setPosts(response.data)
        })
    }

    onPageChage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${pageNumber}&count${this.props.pagesSize}`).then(response => {
            this.props.setPosts(response.data)
        });
    }

    render() {
        return <Posts totalPostsCount={this.props.totalPostsCount}
                      pagesSize={this.props.pagesSize} 
                      currentPage={this.props.currentPage}
                      postsData={this.props.postsData}
                      onPageChage={this.onPageChage}/>
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

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(postsAC(posts))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCls);

export default PostsContainer;
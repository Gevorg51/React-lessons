import React from 'react';
import { connect } from 'react-redux';
import { postsAC, setCurrentPageAC, setIsFetchingAC } from '../../state/postData-reducer';
import Posts from './posts';
import Preloader from '../common/preLoader/Preloader';
import { postsAPI } from '../../api/postsApi';

class PostsCls extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        postsAPI.getPosts(this.props.currentPage, this.props.pagesSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setPosts(data)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        postsAPI.getPosts(pageNumber, this.props.pagesSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setPosts(data)
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
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
        isFetching: state.postsData.isFetching,
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
    setIsFetching: setIsFetchingAC,
},
)(PostsCls);

export default PostsContainer;
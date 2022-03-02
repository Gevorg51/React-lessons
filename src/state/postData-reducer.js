let SET_POSTS = 'SET_POSTS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    posts: [ ],
    pagesSize: 10,
    totalPostsCount: 100,
    currentPage: 1,
    isFetching: false,
}

let postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:{
            return {...state, posts: action.posts}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }           
        
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
    }
}

export const postsAC = (posts) => ({type: SET_POSTS, posts})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default postReducer;
let SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: [
        // { id: 1, post: 'Thank you. You are a good man!!', likes: 12 },
        // { id: 2, post: 'How much worth your works?', likes: 2 },
        // { id: 3, post: 'You are a great worker!!', likes: 17 },
        // { id: 4, post: 'Hello!!', likes: 0 },
        // { id: 5, post: 'You have a good products!!', likes: 5 },
    ]
}

let postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: [...state.posts, ...action.posts]}
            
        default: return state
    }
}

export const postsAC = (posts) => ({type: SET_POSTS, posts})

export default postReducer;
const ADD_COMMENT = "ADD_COMMENT";
const ADD_NEW_TEXT = "ADD_NEW_TEXT";

let initialState = {
    comments: [
        { id: 1, comment: 'Its sunny today!!', likes: 12 },
        { id: 2, comment: 'Feeling bad today..!', likes: 5 },
        { id: 3, comment: 'Have many things to do!!!', likes: 7 },
    ],
    newCommentText: 'Your new status here...',
}


const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COMMENT: {
            return {
                ...state,
                comments: [...state.comments,{ id: 5,comment: state.newCommentText,likes: 0,}],
                newCommentText: ''
            };
        }

        case ADD_NEW_TEXT: {
            return {
                ...state,
                newCommentText: action.newText
            }
        }

        default:
            return state;
    }

}

export const addCommentActionCreator = () => ({ type: ADD_COMMENT });
export const addNewTextActionCreator = (newText) => ({ type: ADD_NEW_TEXT, newText: newText });

export default commentsReducer;
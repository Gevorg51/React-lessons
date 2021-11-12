const ADD_COMMENT = "ADD_COMMENT"
const ADD_NEW_TEXT = "ADD_NEW_TEXT"

const commentsReducer = (state, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            let newElement = {
                id: 5,
                comment: state.newCommentText,
                likes: 0,
            };
            state.comments.push(newElement);
            state.newCommentText = '';
            return state;
        case ADD_NEW_TEXT:
            state.newCommentText = action.newText
            return state;

        default:
            return state;
    }
}

export const addCommentActionCreator = () => ({ type: ADD_COMMENT });

export const addNewTextActionCreator = (newText) => ({ type: ADD_NEW_TEXT, newText: newText });

export default commentsReducer;
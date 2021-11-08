const ADD_COMMENT = "ADD_COMMENT"

const commentsReducer = (state, action) => {

    if (action.type === 'addComment') {
        let newElement = {
            id: 5,
            comment: this._state.commentsData.newCommentText,
            likes: 0,
        };
        this._state.commentsData.comments.push(newElement);
        this._state.commentsData.newCommentText = '';
        this._callSubscriber(this._state);
    } else if (action.type === 'addNewText') {
        this._state.commentsData.newCommentText = action.newText;
        this._callSubscriber(this._state);
    }

    return state;
}
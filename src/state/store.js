import commentsReducer from "./commentsData-reducer";
import messageReducer from "./messageReducer";

let store = {
    _state: {
        commentsData: {
            comments: [
                { id: 1, comment: 'Its sunny today!!', likes: 12 },
                { id: 2, comment: 'Feeling bad today..!', likes: 5 },
                { id: 3, comment: 'Have many things to do!!!', likes: 7 },
            ],
            newCommentText: 'Your new status here...',
        },
        postsData: {
            posts: [
                { id: 1, post: 'Thank you. You are a good man!!', likes: 12 },
                { id: 2, post: 'How much worth your works?', likes: 2 },
                { id: 3, post: 'You are a great worker!!', likes: 17 },
                { id: 4, post: 'Hello!!', likes: 0 },
                { id: 5, post: 'You have a good products!!', likes: 5 },
            ]
        },
        messageData: {
            messages: [
                { id: 1, message: 'guliguli', },
                { id: 2, message: 'guliguli', },
                { id: 3, message: 'guliguli', },
                { id: 4, message: 'guliguli', },
            ],
            newMessageBody: 'Send message here...',
        },
        friendsData: {
            friends: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Ganry' },
                { id: 3, name: 'John' },
                { id: 4, name: 'Richmond' },
            ]
        }
    },

    _callSubscriber() {
        console.log('State Changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.commentsData = commentsReducer(this._state.commentsData, action)
        this._state.messageData = messageReducer(this._state.messageData, action)
        this._callSubscriber(this._state)
    },
};

window.store = store;

export default store;
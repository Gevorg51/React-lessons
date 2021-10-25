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
            newMessagesText: 'Send message here...',
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
        if (action.type === 'addMessages') {
            let newMessages = {
                id: 5,
                messages: this._state.messageData.newMessagesText,
            };
            this._state.messageData.messages.push(newMessages);
            this._state.messageData.newMessagesText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'addText') {
            this._state.messageData.newMessagesText = action.addText;
            this._callSubscriber(this._state);
        }
    }
};

export const addCommentActionCreator = () => ({ type: 'addComment' });

export const addNewTextActionCreator = (newText) => ({ type: 'addNewText', newText: newText });

export const addNewMessagesActionCreator = () => ({ type: 'addMessages' });

export const addTextActionCreator = () => ({ type: 'addText', message: 'addtext' })

window.store = store;

export default store;
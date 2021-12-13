const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'guliguli', },
        { id: 2, message: 'guliguli', },
        { id: 3, message: 'guliguli', },
        { id: 4, message: 'guliguli', },
    ],
    newMessageBody: 'Send message here...',
}

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }

        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: state.newMessageBody}],
            }

            // let stateCopy = {...state};
            // let body = stateCopy.newMessageBody;
            // stateCopy.newMessageBody = '';
            // stateCopy.messages = [...state.messages]
            // stateCopy.messages.push({ id: 5, message: body })
            // return stateCopy;
        }

        default:
            return state; 
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messageReducer;

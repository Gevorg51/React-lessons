import {combineReducers, createStore} from "redux";
import commentsReducer from "./commentsData-reducer";
import messageReducer from "./messageReducer";
import postReducer from "./postData-reducer";
import friendsReducer from "./frinedsData-reducer";

let reducers = combineReducers({
    commentsData: commentsReducer,
    messageData: messageReducer,
    postsData: postReducer,
    friendsData: friendsReducer,
})

let store = createStore(reducers);

export default store;
import { combineReducers, createStore } from "redux";
import commentsReducer from "./commentsData-reducer";
import messageReducer from "./messageReducer";
import postReducer from "./postData-reducer";
import friendsReducer from "./frinedsData-reducer";
import userReducer from "./user-reducer";
import profileReducer from "./pofileData-reducer";

let reducers = combineReducers({
    commentsData: commentsReducer,
    messageData: messageReducer,
    postsData: postReducer,
    friendsData: friendsReducer,
    usersData: userReducer,
    profileData: profileReducer
})

let store = createStore(reducers);

window.store = store

export default store;
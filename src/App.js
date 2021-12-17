import React from "react";
import './App.css';
import Header from'./../src/Components/Header/header';
import Profile from './Components/Profile/profile';
import NavBar from './Components/NavBar/navBar';
import Menu from './Components/Menu/menu';
import UsersContainer from './Components/Users/usersContainer';
import { Route } from 'react-router';
import MessagesContainer from "./Components/Messages/messagesContainer";
import PostsContainer from "./Components/Posts/postsContainer";


const App = (props) => {
    // debugger;
  return (
    <div className="appWrapper">
      <Header />
      <NavBar />
      <div className="app_wrapper_content">
        <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
        <Route path='/Menu' render={() => <Menu />} />
        <Route path='/Users' render={() => <UsersContainer store={props.store}/>}/>
        <Route path='/Messages' render={() => <MessagesContainer store={props.store}/>}/>
        <Route path='/Posts' render={() => <PostsContainer store={props.store}/>}/>
        </div>
    </div>
  );
}

export default App;
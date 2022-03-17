import React from "react";
import './App.css';
import HeaderComponent from "./Components/Header/headerComponent";
import ProfileContainer from './Components/Profile/profileContainer';
import NavBar from './Components/NavBar/navBar';
import Menu from './Components/Menu/menu';
import UsersContainer from './Components/Users/usersContainer';
import { Route } from 'react-router';
import MessagesContainer from "./Components/Messages/messagesContainer";
import PostsContainer from "./Components/Posts/postsContainer";

const App = (props) => {
  return (
    <div className="appWrapper">
      <HeaderComponent />
      <NavBar />
      <div className="app_wrapper_content">
        <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/Menu' render={() => <Menu />} />
        <Route path='/Users' render={() => <UsersContainer />}/>
        <Route path='/Messages' render={() => <MessagesContainer />}/>
        <Route path='/Posts' render={() => <PostsContainer />}/>
        </div>
    </div>
  );
}

export default App;
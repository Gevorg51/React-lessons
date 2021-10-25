import React from "react";
import './App.css';
import Header from'./../src/Components/Header/header';
import Profile from './Components/Profile/profile';
import NavBar from './Components/NavBar/navBar';
import Menu from './Components/Menu/menu';
import Friends from './Components/Friends/friends';
import Messages from './Components/Messages/messages';
import Posts from './Components/Posts/posts';
import { Route } from 'react-router';

const App = (props) => {
  return (
    <div className="appWrapper">
      <Header />
      <NavBar />
      <div className="app_wrapper_content">
        <Route path='/Profile' render={() => <Profile dispatch={props.dispatch} commentsData={props.state.commentsData}/>}/>
        <Route path='/Menu' render={() => <Menu />} />
        <Route path='/Friends' render={() => <Friends />}/>
        <Route path='/Messages' render={() => <Messages dispatch={props.dispatch} messageData={props.state.messageData} friendsData={props.state.friendsData}/>}/>
        <Route path='/Posts' render={() => <Posts state={props.state.postsData}/>}/>
        </div>
    </div>
  );
}

export default App;
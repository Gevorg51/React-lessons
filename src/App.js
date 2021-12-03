import React from "react";
import './App.css';
import Header from'./../src/Components/Header/header';
import Profile from './Components/Profile/profile';
import NavBar from './Components/NavBar/navBar';
import Menu from './Components/Menu/menu';
import Friends from './Components/Friends/friends';
import Posts from './Components/Posts/posts';
import { Route } from 'react-router';
import MessagesContainer from "./Components/Messages/messagesContainer";

const App = (props) => {
    // debugger;
  return (
    <div className="appWrapper">
      <Header />
      <NavBar />
      <div className="app_wrapper_content">
        <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
        <Route path='/Menu' render={() => <Menu />} />
        <Route path='/Friends' render={() => <Friends />}/>
        <Route path='/Messages' render={() => <MessagesContainer store={props.store}/>}/>
        <Route path='/Posts' render={() => <Posts state={props.state.postData}/>}/>
        </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, BrowserRouter } from "react-router-dom";

import News from './components/Article/News/News';
import Friends from './components/Article/Friends/Friends';
import Settings from './components/Article/Settings/Settings';
import MessagesContainer from './components/Article/Messages/MessagesContainer';
import UsersContainer from './components/Article/Users/UsersContainer';
import ProfileContainer from './components/Article/Profile/ProfileContainer';


const App = (props) => {

  return (

    <div className="app-wrap">
      <Header />
      <Nav />
      <article className="article">

        <Route path="/profile" render={() =>
          <ProfileContainer />} />
        <Route path="/messages"
          render={() => <MessagesContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/users" render={() => <UsersContainer />} />

      </article>
    </div>
  );
}


export default App;

// let ProfileInf = () => <Profile/> 2ой

{/* <Route path="/profile" component={Profile} />  1ый способ рендерить
              <Route path="/profile" component={ ProfileInf } /> 2ой
              <Route path="/profile" render={ () => <Profile/>} /> 3ий 

          {/* <Route exact path="/messages" component={Messages} /> строго указаный путь */}
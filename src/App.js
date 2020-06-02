import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Components/Home';
import Users from './Components/Users';
import UserDetails from './Modules/UserDetails'
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Albums from './Components/Albums';
import Photos from './Components/Photos';
import Todos from './Components/Todos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/users' exact component={Users}/>
      <Route path='/users/:id' component={UserDetails} />
      <Route path='/posts' exact component={Posts}/>
      <Route path='/comments' exact component={Comments}/>
      <Route path='/albums' exact component={Albums}/>
      <Route path='/photos' exact component={Photos}/>
      <Route path='/todos' exact component={Todos}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

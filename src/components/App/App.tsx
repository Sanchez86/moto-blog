import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from 'pages/Home';
import SinglePost from 'pages/SinglePost/index';
import Header from '../Header';

const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/post/:postId" component={SinglePost} />

    </Switch>
  </div>
);

export default App;

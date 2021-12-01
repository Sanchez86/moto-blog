import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import SinglePost from 'pages/SinglePost';

const App: React.FC = () => (
  <>
    <header><Link to="/">Home</Link></header>
    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/post/:postId" component={SinglePost} />

    </Switch>
  </>
);

export default App;

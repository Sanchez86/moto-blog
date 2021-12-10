import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import SinglePost from 'pages/SinglePost';
import AdminPanel from 'pages/AdminPanel/AdminPanel';

const App: React.FC = () => (
  <>
    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/post/:postId" component={SinglePost} />

      <Route path="/admin" exact component={AdminPanel} />

    </Switch>
  </>
);

export default App;

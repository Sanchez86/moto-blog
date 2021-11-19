import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';

// import store from './store/store';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root'),
);

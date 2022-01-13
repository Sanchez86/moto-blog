import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App/App';
import store from './store/store';
import './index.css';

export const COLORS = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.BLACK,
    },
    secondary: {
      main: COLORS.WHITE,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);

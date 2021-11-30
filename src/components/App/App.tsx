import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'store/selectors';
import './App.css';
import Posts from '../Posts';
import Error from '../Error';

const App: React.FC = () => {
  const error = useSelector(selectError);

  return (
    <div className="App">
      {error ? <Error error={error} /> : <Posts />}
    </div>
  );
};

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'interfaces';
import Posts from '../components/Posts';
import Error from '../components/Error';

const Home = () => {
  const err: string = useSelector((state:IState) => state.error);
  const content = err ? <Error error={err} /> : <Posts />;
  return (
    <div className="App">
      {content}
    </div>
  );
};

export default Home;

import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'store/selectors';
import Posts from 'components/Posts';
import Error from 'components/Error';

const Home: React.FC = () => {
  const error: string = useSelector(selectError);

  return (
    <div className="App">
      {error ? <Error error={error} /> : <Posts />}
    </div>
  );
};

export default Home;

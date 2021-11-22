import React from 'react';
import './error.scss';

interface MyCustomInterface{
  err: string;
}

const Error = ({ err }: MyCustomInterface) => {
  const { status, message } = JSON.parse(err);

  return (
    <div className="loading">
      <div>
        <h2>{status}</h2>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default Error;

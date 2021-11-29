import React from 'react';
import './error.scss';

const Error = ({ err }: { err: string }) => {
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

import React from 'react';
import './error.scss';

const Error: React.FC<{ error:string }> = ({ error }) => (
  <div className="loading">
    <div>
      <h3>{error}</h3>
    </div>
  </div>
);

export default Error;

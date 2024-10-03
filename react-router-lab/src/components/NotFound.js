import React from 'react';

const NotFound = () => {
    const API_URL = process.env.REACT_APP_API_URL;
  return (
    <div className="not-found">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="btn">Go Back Home</a>
    </div>
  );
};

export default NotFound;
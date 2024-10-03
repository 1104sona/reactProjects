// src/components/Notification.js

import React from 'react';

const Notification = ({ message, onClose }) => {
    const API_URL = process.env.REACT_APP_API_URL;
  const notificationClass = `notification ${message.type}`;

  return (
    <div className={notificationClass}>
      {message.text}
      <button onClick={onClose} className="btn btn-cancel">Close</button>
    </div>
  );
};

export default Notification;
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
export default function Notifications () {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='priority'>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
      <button
        style={{ position: 'absolute', right: '0' }}
        aria-label='Close'
        onClick={handleButtonClick}
        img src='{close-icon.png}'
      />
    </div>
  );
}

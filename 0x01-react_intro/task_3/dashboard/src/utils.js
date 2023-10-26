import './App.css';

function getLatestNotification () {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
function getFullYear () {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
function getFooterCopy (isIndex) {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}

export { getFooterCopy, getFullYear, getLatestNotification };

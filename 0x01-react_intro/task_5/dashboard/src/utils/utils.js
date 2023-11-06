// task_5/dashboard/src/utils/utils.js
export const getFullYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export const getFooterCopy = (isFull) => {
  return isFull ? '© 2023 All rights reserved' : '© 2023 Some rights reserved';
};

export const getLatestNotification = () => {
  // Return the latest notification content
  return 'This is the latest notification!';
};

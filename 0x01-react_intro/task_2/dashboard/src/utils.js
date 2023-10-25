import './App.css';

function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
function getFooterCopy(isIndex){
  if (isIndex){
    return 'Holberton School'
  }
  else{
    return 'Holberton School main dashboard'
  }
}

export {getFooterCopy, getFullYear};
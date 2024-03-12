import bot from './assets/bot.svg';
import user from './assets/user.svg';

const from = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');
let loadInterval;

//the loading function
const loader = () => {
  element.textContent = '';
  
  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....')
    {
      element.textContent = '';
    }
  }, 300)
}

//the typing text fxn 
const typeTxt = () => {
  let index = 0;
  
  let interval = setInterval(() => {
    if (index < text.length)
    {
      element.innerHTML += text.charAt(index);
      index ++;
    }
  }, 20)
}

//unique id for every message
const generateUniqueId = () => {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexidecimalString = randomNumber.toString(16);

  return `id-${timeStamp}-${hexidecimalString}`;
}
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


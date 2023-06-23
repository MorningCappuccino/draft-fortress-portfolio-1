const codeGo = '{ Code_Go }'.split('');

const preloader = document.documentElement.querySelector('.Preloader');
const domTextElement = document.documentElement.querySelector('.Preloader__text');
const body = document.documentElement.querySelector('body');

let interval;
let count = 0;

body.style['padding-right'] = `${preloader.offsetWidth - body.clientWidth}px`;
body.style.overflow = 'hidden';

const printText = () => {
  interval = setInterval(() => {
    if (count === codeGo.length) {
      count = 0;
      clearInterval(interval);
      return;
    }

    domTextElement.innerHTML = domTextElement.innerHTML + codeGo[count];
    count++;
  }, 200);
};

const closePreloader = () => {
  setTimeout(() => {
    preloader.classList.add('Preloader--hidden');
  }, 2000);

  setTimeout(() => {
    preloader.remove();
    body.removeAttribute('style');
  }, 2450);
};

window.addEventListener('DOMContentLoaded', printText);
window.addEventListener('load', closePreloader);

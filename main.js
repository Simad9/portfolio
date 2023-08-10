// Menu burger dan menu x
const menu = document.querySelector('.menu ');
menu.addEventListener('click', () => {
  let img = document.querySelector('.menu img').src;
  if (img.indexOf('burger') == -1) {
    document.querySelector('.menu img').src = 'img/burger.png';
  } else {
    document.querySelector('.menu img').src = 'img/x.png';
  }
})
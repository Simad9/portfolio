// Menu burger
const menuIcon = document.querySelector('#menu-icon')
const navigation = document.querySelector('.navigation')
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x')
  navigation.classList.toggle('active')
})

// Saat milih langsung nutup
window.addEventListener('scroll', () => {
  menuIcon.classList.remove('bx-x')
  navigation.classList.remove('active')
})

// simulasi kirim pesan
const btnSubmit = document.querySelector('input[type=\'submit\'] ');
btnSubmit.addEventListener('click', () => {
  alert('Ceritanya pesan terkirim')
})


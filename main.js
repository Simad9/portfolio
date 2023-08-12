// Menu burger
const menuIcon = document.querySelector('#menu-icon')
const navigation = document.querySelector('.navigation')
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x')
  navigation.classList.toggle('active')
})

// scroll active
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header .navigation .nav-item')
let id = 'about'
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 200
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    // Animasi ketika di scroll
    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animation');
    }
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navigation a[href="#' + id + '"').parentNode.classList.add('active')
      })
    }
  })
  menuIcon.classList.remove('bx-x')
  navigation.classList.remove('active')
})

// Scroll offset
const navigationHeight = document.querySelector('.navigation').offsetHeight
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 5 + "px")

// simulasi kirim pesan
const btnSubmit = document.querySelector('input[type=\'submit\'] ');
btnSubmit.addEventListener('click', () => {
  alert('Ceritanya pesan terkirim')
})

// lihat all project
const btnProj = document.querySelector('.projects .btn')
btnProj.addEventListener('click', () => {
  confirm('Halaman belum dibuat, project lain ada di portfolio. Apakah anda ingin membukanya?')
})
const menuBtn = document.getElementById('menu-btn')
const mainNav = document.querySelector('.main-nav')

menuBtn.addEventListener('click', () => {
  menuBtn.querySelector('.menu-btn').classList.toggle('active')
  mainNav.classList.toggle('show-drawer')
})

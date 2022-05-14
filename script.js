const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

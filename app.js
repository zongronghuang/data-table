const input = document.getElementById('action__input_1')

const toggleMenu = event => {
  const menu = document.getElementById("action__menu_1")
  menu.classList.toggle('hidden')
}

input.addEventListener('click', toggleMenu)


const darkModeToggle = document.getElementById('dark__mode__toggle')

const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

darkModeToggle.addEventListener('change', darkModeToggleHandler)

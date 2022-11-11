export function darkTheme() {
  const btnDark = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconDark = 'bx-sun'

  const selectedTheme = window.localStorage.getItem('selected-theme')
  const selectedIcon = window.localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => btnDark.classList.contains(iconDark) ? 'bx bx-moon' : 'bx bx-sun'

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    btnDark.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconDark)
  }

  btnDark.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    btnDark.classList.toggle(iconDark)
    window.localStorage.setItem('selected-theme', getCurrentTheme())
    window.localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

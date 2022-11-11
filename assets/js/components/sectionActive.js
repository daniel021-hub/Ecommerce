export function sectionActive() {
  const sections = document.querySelectorAll('section[id]')

  function fn() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('link-active')
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('link-active')
      }
    })
  }

  window.addEventListener('scroll', fn)
}
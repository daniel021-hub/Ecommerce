export function activeProduct() {
  const productsLinks = document.querySelectorAll('.products__item')

  for (let i = 0; i < productsLinks.length; i++) {
    productsLinks[i].addEventListener('click', function () {
      for (let j = 0; j < productsLinks.length; j++) {
        productsLinks[j].classList.remove('products__active')
      }
      this.classList.add('products__active')
    })
  }
}

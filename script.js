function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img-mobile-light
    img.setAttribute("src", "./assets/img-mobile-light.png")
  } else {
    // se tiver sem light mode, adicionar a img-mobile
    img.setAttribute("src", "./assets/img-mobile.png")
  }
}

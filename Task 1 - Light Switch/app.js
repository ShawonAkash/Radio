const lights = document.querySelectorAll('.on')

lights.forEach((light) => {
  light.addEventListener('click', () => {
    removeActiveClasses()
    light.classList.add('active')
  })
})

function removeActiveClasses() {
  lights.forEach((light) => {
    light.classList.remove('active')
  })
}

console.log(lights)

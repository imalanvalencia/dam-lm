const $form = document.getElementById("formulario")

$form.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value.trim()
  const edad = document.getElementById("edad").value.trim()
  const email = document.getElementById("email").value.trim()

  if (nombre === "") {
    e.preventDefault()
    alert("Nombre no puede estar vacío")
    return
  }

  if(!RegExp("^[0-9]{1,3}$").test(edad)) {
    e.preventDefault()
    alert("Edad debe ser un número entre 1 y 3 dígitos")
    return
  }

  if(!RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(email)) {
    e.preventDefault()
    alert("Email no es válido")
    return
  }

})

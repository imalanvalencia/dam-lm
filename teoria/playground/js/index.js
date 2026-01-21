document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e, "Cargo el DOM")
  let $body = document.querySelector("body")
  let $form_nota = document.querySelector("#nota")
  let $result_nota = document.querySelector("#result-nota")
  let $form_adivina = document.querySelector("#adivina")
  let $result_adivina = document.querySelector("#result-adivina")
  let $inferior = document.querySelector("#inferior")
  let $superior = document.querySelector("#superior")

  let tabla = [
    ["cafe", "precio"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
    ["americano", "10.2"],
  ]

  $body.insertAdjacentHTML(
    "beforeend",
    `<table border="3"> ${tabla.map((tr) => `<tr>${tr.map((t) => `<td>${t}</td>`)}</tr>`)} <table>`,
  )

  $form_nota.addEventListener("submit", (e) => {
    e.preventDefault()

    let InputValue = parseInt(e.target[0].value)

    if (InputValue > 10) $result_nota.innerText = "muy alta"
    else if (InputValue > 8) $result_nota.innerText = "EXCELENTE"
    else if (InputValue > 6) $result_nota.innerText = "SUFICIENTE"
    else if (InputValue > 5) $result_nota.innerText = "CASI PIERDES"
    else if (InputValue > 3) $result_nota.innerText = "MALA NOTA"
    else if (InputValue > 0) $result_nota.innerText = "RENUNCIA"
    else $result_nota.innerText = "MUY BAJA"
  })

  let max = 10
  let min = 1
  let intentos = 0
  let $label_adivina = document.querySelector("#label-adivina")
  let $input_adivina = $form_adivina.querySelector("input")

  let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min

  $superior.innerText = max
  $inferior.innerText = min

  console.log(aleatorio)
  
  const generarNuevo = () => {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    intentos = 0
    console.log(aleatorio)
  }
  
  $form_adivina.addEventListener("submit", (e) => {
    e.preventDefault()

    intentos++
    let InputValue = parseInt(e.target[0].value)

    if (InputValue > aleatorio)
      $result_adivina.innerText = "Numero es mas alto"
    else if (InputValue < aleatorio)
      $result_adivina.innerText = "Numero es mas bajo"
    else if (InputValue === aleatorio) {
      alert(`Has adivinado en ${intentos} intentos!`)
      $result_adivina.innerText = ""
      $label_adivina.innerHTML = `Adivina otro numero entre <span id="inferior">${min}</span>  hasta <span id="superior">${max}</span>`
      $input_adivina.value = ""
      generarNuevo()
    }
  })
})

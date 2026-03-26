const $tipoElemento = document.getElementById("tipoElemento")
const $crearElemento = document.getElementById("crear")
const $codigoGenerado = document.getElementById("codigo")
const $contenidoAInsertar = document.getElementById("contenido")
const $colorAInsertar = document.getElementById("color")
const $idAInsertar = document.getElementById("idElemento")
const $resultado = document.getElementById("resultado")

let idAnteriores = []
const TRANSFORMADOR_ELEMENTO = {
  p: "p",
  img: "img",
  button: "button",
  enlace: "a",
  tabla: "table",
  h1: "h1",
}

$crearElemento.addEventListener("click", (e) => {
  if ($idAInsertar.value === "") {
    alert("El id no puede estar vacio")
    return
  }

  if (idAnteriores.includes($idAInsertar.value)) {
    alert("El id tiene que ser unico")
    return
  }
  if ($contenidoAInsertar.value === "") {
    alert("El contenido no puede estar vacio")
    return
  }

  const elemento = document.createElement(
    TRANSFORMADOR_ELEMENTO[$tipoElemento.value],
  )

  switch ($tipoElemento.value) {
    case "img":
      elemento.src = $contenidoAInsertar.value
      break
    case "tabla":
      construyeTabla(elemento, $contenidoAInsertar.value)
      elemento.border = "1"
      break
    case "enlace":
      elemento.href = $contenidoAInsertar.value
      elemento.target = "_blank"
    case "button":
      elemento.textContent = $contenidoAInsertar.value
      elemento.style.background = $colorAInsertar.value
      break
    default:
      elemento.textContent = $contenidoAInsertar.value
      elemento.style.color = $colorAInsertar.value
      break
  }

  elemento.id = $idAInsertar.value

  idAnteriores.push($idAInsertar.value)

  $resultado.appendChild(elemento)
  $codigoGenerado.innerText = $resultado.innerHTML
})

function construyeTabla(elemento, texto) {
  const NUMERO_FILAS = prompt("numero de filas")
  const NUMERO_COLUMNAS = prompt("numero de columnas")

  for (let i = 0; i < NUMERO_FILAS; i++) {
    const tr = document.createElement("tr")

    for (let j = 0; j < NUMERO_COLUMNAS; j++) {
      const td = document.createElement("td")
      td.textContent = texto
      tr.appendChild(td)
    }

    elemento.appendChild(tr)
  }
}

function borrar() {
  document.getElementById($idAInsertar.value).remove()
  idAnteriores = idAnteriores.filter(id => id !== $idAInsertar.value)
  $codigoGenerado.innerText = $resultado.innerHTML
}

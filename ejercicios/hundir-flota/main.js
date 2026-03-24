let $flota = document.getElementById("flota")
let $mensaje = document.getElementById("mensaje")
let $descripcion = document.getElementById("descripcion")

let $intentos = document.getElementById("intentos")
let flotaDataFile = "flota.json"

const mensajes = {
  TOCADO: "¡Tocado! 🚢🏹",
  AGUA: "Agua 🤽‍♂️🔫",
  TIERRA: "Tierra 🏝️🚫",
  ERROR_CARGA: "A occurido un error al cargar el juego 😵‍💫",
  DOBLE_CLICK: "¡Ya has disparado aquí! Intenta en otro lugar. 🔁",
  GANADOR: "¡Felicidades! Has hundido toda la flota. 🏆🎉",
  INICIO_JUEGO: "¡Buena suerte! 🍀",
}

let haGanado = false
let juegoIniciado = false
const audio = new Audio("himno-barca.mp3")

async function ObtenFlotaData() {
  const response = await fetch(flotaDataFile)

  if (!response.ok) {
    $mensaje.textContent = mensajes.ERROR_CARGA
    return null
  }

  const data = await response.json()
  return data
}

document.querySelectorAll("button").forEach((btn) =>
  btn.addEventListener("mouseover", () => {
    if (haGanado && !juegoIniciado) return

    const celdasTocadas = document.querySelectorAll("#flota td.tocado")

    const hasGanado = () => {
      haGanado = true
      $mensaje.textContent = mensajes.GANADOR
      audio.play()

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      })
    }

    Array.from(celdasTocadas).every(
      (celda) => !celda.classList.contains("no-tocado"),
    ) && hasGanado()
  }),
)

function Disparar(i, j) {
  $descripcion.textContent = ""

  const celda = document.getElementById(`celda-${i}-${j}`)
  let intentos = parseInt($intentos.textContent)

  if (celda.classList.contains("no-tocado")) {
    intentos++
    $intentos.textContent = intentos
    celda.classList.remove("no-tocado")
    $mensaje.textContent = mensajes.DOBLE_CLICK
  }

  if (celda.classList.contains("tocado")) {
    $mensaje.textContent = mensajes.TOCADO
  } else if (celda.classList.contains("tierra")) {
    $mensaje.textContent = mensajes.TIERRA
  } else {
    $mensaje.textContent = mensajes.AGUA
  }
}

document.getElementById("iniciar").addEventListener("click", async () => {
  juegoIniciado = true
  const flotaData = await ObtenFlotaData()

  if (flotaData) {
    $flota.innerHTML = ` 
                ${flotaData
                  .map(
                    (barco, i) => `
                    <tr>
                    ${barco
                      .map(
                        (celda, j) => `
                        <td id="celda-${i}-${j}" class="${celda ? (celda === 1 ? "tocado" : "tierra") : "agua"} no-tocado" >
                            <button onmouseover="Disparar(${i}, ${j})"></button>
                        </td>`,
                      )
                      .join("")}
                    </tr>
                `,
                  )
                  .join("")}`
  }

  $flota.style.display = "flex"
  $intentos.textContent = "0"
  $mensaje.textContent = mensajes.INICIO_JUEGO
  $descripcion.textContent = "¡Haz clic en las celdas para disparar! 🎯"
  audio.pause()
})

document.getElementById("mostrar-todo").addEventListener("click", () => {
  const celdas = document.querySelectorAll("#flota td")
  celdas.forEach((celda) => {
    celda.classList.remove("no-tocado")
  })
})

let $flota = document.getElementById("flota")
let $mensaje = document.getElementById("mensaje")
let flotaDataFile = "/flota.json"

async function ObtenFlotaData() {
  const response = await fetch(flotaDataFile)

  if (!response.ok) {
    $mensaje.textContent = "A occurido un error al cargar el juego"
    return null
  }

  const data = await response.json()
  return data
}

function Disparar(i, j) {
  const celda = document.getElementById(`celda-${i}-${j}`)
  celda.style.visibility = "visible"

  if (celda.classList.contains("tocado")) {
    $mensaje.textContent = "¡Tocado!"
  } else {
    celda.classList.add("tocado")
    $mensaje.textContent = "Agua"
  }
}

// document.getElementById("iniciar").addEventListener("click", async () => {
$flota.style.display = "block"

// const flotaData = await ObtenFlotaData()

ObtenFlotaData().then((flotaData) => {
  if (flotaData) {
    $flota.innerHTML = ` 
                ${flotaData
                  .map(
                    (barco, i) => `
                    <tr>
                    ${barco
                      .map(
                        (celda, j) => `
                        <td id="celda-${i}-${j}" class="${celda ? "tocado" : "agua"}">
                            <button onclick="Disparar(${i}, ${j})">${celda}</button>
                        </td>`,
                      )
                      .join("")}
                    </tr>
                `,
                  )
                  .join("")}`
  }
})
// })

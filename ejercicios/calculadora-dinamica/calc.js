const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operadores = ["+", "-", "*", "/", "="]

let total = ""

function calculadora() {
  const calculadora = document.createElement("section")
  const display = document.createElement("input")
  const titulo = document.createElement("h1")
  const btns = document.createElement("article")

  btns.classList.add("calculadora__buttons")
  display.id = "calculadora__display-input"
  display.classList.add("calculadora__display-input")

  titulo.innerText = "Calculadora"
  calculadora.appendChild(titulo)
  calculadora.appendChild(display)
  calculadora.appendChild(btns)

  numeros.forEach((num) => {
    const btn = document.createElement("button")
    btn.classList.add("calculadora__numeros")
    btn.innerText = num

    btn.addEventListener("click", (_) => {
      display.value += num
    })

    btns.append(btn)
  })

  operadores.map((op) => {
    const btn = document.createElement("button")
    btn.classList.add("calculadora__button")
    btn.innerText = op

    btn.addEventListener("click", (_) => {
      if (op === "=" && total !== "") {
        display.value = eval(total + display.value)
        return
      }

      total += display.value + op

      display.value = ""
    })

    btns.append(btn)
  })

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Enter":
        display.value = eval(total + display.value)
        break
      case "Escape":
        total = ""
        display.value = ""
        break
      case "+":
      case "-":
      case "*":
      case "/":
        total += display.value + e.key

        display.value = ""
        break

      default:
        display.value += e.key
        break
    }
  })

  return calculadora
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(calculadora())
})

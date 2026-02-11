function HelloWorld() {
  alert("Hola mundo")
}

let operaciones = {
  division: '/',
  multiplicacion: '*',
  suma: '+',
  resta: '-'
}

let $aCalcular = document.getElementById("aCalculcar")
let $resultado = document.getElementById("resultado")

let $funciones = document.getElementById("funciones")
let $numeros = document.getElementById("numeros")
let $operaciones = document.getElementById("operaciones")
let $igual = document.getElementById("igual")


$numeros.innerHTML = Array.from({ length: 10 }, (_, index) => `<button class="btn numero">${index}</button>`).reverse().join('') + $numeros.innerHTML

$operaciones.innerHTML = Object.values(operaciones).map(op => `<button class="btn operacion">${op}</button>`).join('') + $operaciones.innerHTML

let funcionesButtons = $funciones.querySelectorAll('.funcion')
let numerosButtons = $numeros.querySelectorAll('.numero')
let operacionesButtons = $operaciones.querySelectorAll('.operacion')

funcionesButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      $aCalcular.value = ''
      $resultado.textContent = ''
    } else if (button.textContent === 'Borrar') {
      $aCalcular.value = $aCalcular.value.slice(0, -1)
    } else if (button.textContent === '%' && $aCalcular.value.length > 0) {
      $aCalcular.value = parseFloat($aCalcular.value) / 100
    }
  })
})

numerosButtons.forEach(button => {
  button.addEventListener('click', () => {
    $aCalcular.value += button.textContent
  })
})

operacionesButtons.forEach(button => {
  button.addEventListener('click', () => 
    $aCalcular.value.length > 0 
    && !Object.values(operaciones).includes($aCalcular.value[$aCalcular.value.length - 1])
    && ($aCalcular.value += button.textContent)
  )
})

$igual.addEventListener('click', () => {
  if ($aCalcular.value.length > 0) {
    try {
      $resultado.innerText = eval($aCalcular.value)
    } catch (error) {
      $resultado.innerText = 'Error'
    }
  }
})


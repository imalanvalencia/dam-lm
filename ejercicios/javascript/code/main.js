import { adivinaNumero } from "./ejercicios/adivina-numero.js";
import { factorial } from "./ejercicios/factorial-numero.js";
import { esPrimo } from "./ejercicios/numeros-primos.js";
import { menuInteractivo } from "./ejercicios/menu-interactivo.js";
import { fibonacci } from "./ejercicios/fibonacci.js";
import { dibujoAsteriscos } from "./ejercicios/dibujo-asteriscos.js";

const ejercicios = {
  1: { nombre: "Adivina el número", funcion: adivinaNumero },
  2: { nombre: "Factorial de un número", funcion: factorial },
  3: { nombre: "Número primo", funcion: esPrimo },
  4: { nombre: "Menú interactivo", funcion: menuInteractivo },
  5: { nombre: "Serie de Fibonacci", funcion: fibonacci },
  6: { nombre: "Dibujo con asteriscos", funcion: dibujoAsteriscos },
};

function mostrarMenu() {
  let menu = "Selecciona un ejercicio:\n";
  for (let key in ejercicios) {
    menu += `${key}. ${ejercicios[key].nombre}\n`;
  }
  menu += "0. Salir\n";
  return prompt(menu);
}

function ejecutar() {
  let opcion = mostrarMenu();

  if (opcion === null || opcion === "0") {
    alert("¡Hasta luego!");
    return;
  }

  if (ejercicios[opcion]) {
    try {
      ejercicios[opcion].funcion();
    } catch (e) {
      console.error("Error:", e);
      alert("Ha ocurrido un error. Intenta de nuevo.");
    }
    ejecutar();
  } else {
    alert("Opción no válida");
    ejecutar();
  }
}

ejecutar();

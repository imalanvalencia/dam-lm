"use strict";
let $jugador = document.getElementsByClassName("jugador");
let $laberinto = document.getElementById("laberinto");

let $mensaje = document.getElementById("mensaje");

console.log($laberinto.children);

function coordenadas(el) {
  return el[0].id
    .split("_")[1]
    .split("-")
    .map((cord) => cord * 1);
}

function colision(element) {
  let esPared = element.className == "pared";

  if (esPared) $mensaje.innerText = "😵Has chocado contra una pared😵‍💫";

  return esPared;
}

function Meta() {
  if ($jugador[0].id == "td_13-13") {
    $mensaje.innerText = "🤩Has ganado🥳💕";
  }
}

function mover(elemento) {
  let aux = [
    elemento.innerHTML,
    $jugador[0].innerHTML,
    elemento.className,
    $jugador[0].className,
  ];

  $jugador.innerHTML = aux[0];
  elemento.innerHTML = aux[1];
  $jugador.className = aux[2];
  elemento.className = aux[3];
}

function moverArriba() {
  //   colision();
  Meta();

  let arriba = `td_${coordenadas($jugador)[0] - 1}-${coordenadas($jugador)[1]}`;
  let $arriba = document.getElementById(arriba);
  mover($arriba);

  document.getElementById("t");
}

function moverAbajo() {
  let abajo = `td_${coordenadas($jugador)[0] + 1}-${coordenadas($jugador)[1]}`;
  let $abajo = document.getElementById(abajo);
  mover($abajo);
}

function moverIzquierda() {
  let izquierda = `td_${coordenadas($jugador)[0]}-${coordenadas($jugador)[1] - 1}`;
  let $izquierda = document.getElementById(izquierda);
  mover($izquierda);
}

function moverDerecha() {
  let derecha = `td_${coordenadas($jugador)[0]}-${coordenadas($jugador)[1] + 1}`;
  console.log(derecha);
  let $derecha = document.getElementById(derecha);
  mover($derecha);
}

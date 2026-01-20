document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e, "Cargo el DOM");

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
  ];

  let $button = document.querySelector("button");
  let $input = document.querySelector("input");
  let $text = document.querySelector("p");
  let $body = document.querySelector("body");

  $body.innerHTML += `<table border="3"> ${tabla.map((tr) => `<tr>${tr.map((t) => `<td>${t}</td>`)}</tr>`)} <table>`;

  $button.addEventListener("click", (e) => {
    console.log($input.value, $input.value.length);

    if ($input.value > "10") $text.innerText = "muy alta";
    if ($input.value > "8") $text.innerText = "EXCELENTE";
    if ($input.value > "6") $text.innerText = "SUFICIENTE";
    if ($input.value > "5") $text.innerText = "CASI PIERDES";
    if ($input.value > "3") $text.innerText = "MALA NOTA";
    if ($input.value > "0") $text.innerText = "RENUNCIA";
    else  $text.innerText = "MUY BAJA";
  });
});

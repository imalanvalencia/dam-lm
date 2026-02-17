let $data = document.getElementById("tabla-data");

document.getElementById("mover").addEventListener("click", (e) => {
  e.preventDefault();

  let formdata = e.target.form
  console.log(e.target.form)
  let filaOrigen = formdata.target["filas"].value;
  let columnaOrigen = formdata.target["columnas"].value;

  console.log(filaOrigen, columnaOrigen);

  insertarTextoTabla(filaOrigen + 1, columnaOrigen + 1, formdata.target["texto"].value);

  formdata.target["texto"].value = "";
});

$data.addEventListener("submit", (e) => {
  e.preventDefault();

  let filas = e.target["filas"].value;
  let columnas = e.target["columnas"].value;
  let texto = e.target["texto"].value;

  insertarTextoTabla(filas, columnas, texto);
});

function insertarTextoTabla(fila, columna, texto) {
  let celda = document.getElementById(`t_${fila}_${columna}`);
  if (celda) {
    console.log(celda);
    celda.textContent = texto;
  } else alert("No se encontró la celda");
}

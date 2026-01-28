console.log("Hola")

let persona = {
  //Objeto persona
  nombre: "Javier",
  edad: 20,
  guapo: "mucho",
  notas: [9, 10, 9.5],
  rico: false,
  asigantura: {
    nombre: "lm",
    profesor: "javier",
    horario: "martes, Miercoles, viernes",
  },
}

function PropiedadPersona() {
  let texto = ""
  for (let i in persona) {
    texto += i + " --> " + persona[i] + " (" + typeof persona[i] + ")<br>"
  }
  return texto
}

function PropiedadObjeto(objeto) {
  let texto = `${objeto}<br/><br/>`
  console.log(objeto)

  for (let i in objeto) {
    if (typeof objeto[i] !== "object")
      texto += "<li9,10,9.5 " + i + " --> " + objeto[i] + " (" + typeof objeto[i] + ")</li>"

    else {
      texto += "<li>" + i + " --> ([object]) </li>"
      texto += PropiedadObjeto(objeto[i])
    }
  }
  return texto
}

document.body.innerHTML = `<ul>${PropiedadObjeto(persona)}<ul>`

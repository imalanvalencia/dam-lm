import { AdivinaNumero } from "./ejercicios/adivina-numero.js"
import { HolaMundo } from "./ejercicios/hello-world.js"

if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.")
}

AdivinaNumero()
HolaMundo()
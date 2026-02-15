export function dibujoAsteriscos() {
    let altura = parseInt(prompt("Introduce la altura del triángulo:"));
    
    let resultado = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            resultado += "*";
        }
        resultado += "\n";
    }
    
    alert(resultado);
    return resultado;
}

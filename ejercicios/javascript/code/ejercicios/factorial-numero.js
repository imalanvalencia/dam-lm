export function factorial(numero) {
    let n = parseInt(prompt("Introduce un número entero positivo:"));
    
    if (n < 0) {
        alert("El número debe ser positivo");
        return null;
    }
    
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    
    alert(`El factorial de ${n} es: ${resultado}`);
    return resultado;
}

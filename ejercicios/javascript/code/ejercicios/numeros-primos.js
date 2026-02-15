export function esPrimo() {
    let numero = parseInt(prompt("Introduce un número mayor que 1:"));
    
    if (numero <= 1) {
        alert("El número debe ser mayor que 1");
        return false;
    }
    
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    
    if (divisores === 2) {
        alert("El número es primo");
        return true;
    } else {
        alert("El número no es primo");
        return false;
    }
}

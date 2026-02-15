export function adivinaNumero() {
    const secreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let adivinado = false;
    
    while (!adivinado) {
        let numero = parseInt(prompt("Adivina el número (entre 1 y 10):"));
        intentos++;
        
        if (numero === secreto) {
            alert(`¡Acertaste! El número era ${secreto}. Intentos: ${intentos}`);
            adivinado = true;
        } else if (numero < secreto) {
            alert("El número es mayor");
        } else {
            alert("El número es menor");
        }
    }
    return { acierto: true, intentos };
}

export function factorial() {
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

export function menuInteractivo() {
    let salir = false;
    
    while (!salir) {
        let opcion = prompt(
            "Menú interactivo:\n" +
            "1. Saludar\n" +
            "2. Sumar dos números\n" +
            "3. Salir\n" +
            "Elige una opción:"
        );
        
        switch (opcion) {
            case "1":
                alert("¡Hola! Bienvenido al programa.");
                break;
            case "2": {
                let num1 = parseFloat(prompt("Introduce el primer número:"));
                let num2 = parseFloat(prompt("Introduce el segundo número:"));
                alert(`La suma es: ${num1 + num2}`);
                break;
            }
            case "3":
                alert("¡Hasta luego!");
                salir = true;
                break;
            default:
                alert("Opción no válida");
        }
    }
    return true;
}

export function fibonacci() {
    let n = parseInt(prompt("Introduce el número de términos:"));
    
    let serie = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        serie.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    alert(`Serie de Fibonacci: ${serie.join(", ")}`);
    return serie;
}

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

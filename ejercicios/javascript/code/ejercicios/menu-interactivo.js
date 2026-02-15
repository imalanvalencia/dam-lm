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

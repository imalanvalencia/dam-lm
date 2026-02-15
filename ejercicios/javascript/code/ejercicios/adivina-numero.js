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

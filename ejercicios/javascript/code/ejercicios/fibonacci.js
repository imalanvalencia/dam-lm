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

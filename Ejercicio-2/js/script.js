
let nota = parseFloat(prompt("Introduce una nota (número) de 0 a 10:"));


if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
} else if (nota === 7) {
    alert("Bien");
} else if (nota >= 8 && nota <= 9) {
    alert("Notable");
} else if (nota === 10) {
    alert("Sobresaliente");
} else {
    alert("Nota inválida. Por favor, introduce un número entre 0 y 10.");
}

let suma = 0;
let numero;

do {
    numero = prompt("Ingresar un número");
    
    if (numero === null) {
        break;
    }

    numero = Number(numero);
    

    if (isNaN(numero)) {
        alert("Número inválido");
    } else {
        suma += numero;
    }
    
} while (confirm('¿Desea continuar?'));

document.write(`Suma total: ${suma}`);


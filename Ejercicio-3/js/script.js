let frase = "";
do {
    const palabraIngresada = prompt ("Ingresar una palabra");
    if (frase.length === 0) {
        frase = palabraIngresada 
        
    }else{
        frase = frase + '-' + palabraIngresada;
    }
    
} while (confirm('Desea continuar?'));
document.write (`frase Ingresada: ${frase}`);

 


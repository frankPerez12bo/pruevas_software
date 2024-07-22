function sumarDigitos() {
    const numero = document.getElementById('numero').value;
    let suma = 0;

    for (let digito of numero) {
        suma += parseInt(digito);
    }

    document.getElementById('resultado').innerText = `La suma de los dígitos es: ${suma}`;
}
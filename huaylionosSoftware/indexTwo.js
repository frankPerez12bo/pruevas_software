function comprobarBisiesto() {
    const year = parseInt(document.getElementById('year').value);
    let resultado = '';

    if (isNaN(year)) {
        resultado = 'Por favor, ingrese un año válido.';
    } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultado = `${year} es un año bisiesto.`;
    } else {
        resultado = `${year} no es un año bisiesto.`;
    }

    document.getElementById('resultado').innerText = resultado;
}
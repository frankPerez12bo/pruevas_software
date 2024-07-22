function calcularCalificacion() {
    const nota = parseFloat(document.getElementById('nota').value);
    let calificacion = '';

    if (nota < 0 || nota > 20 || isNaN(nota)) {
        calificacion = 'La nota ingresada no es válida. Debe estar entre 0 y 20.';
    } else if (nota <= 10.5) {
        calificacion = 'Malo';
    } else if (nota <= 14) {
        calificacion = 'Regular';
    } else if (nota <= 18) {
        calificacion = 'Bueno';
    } else {
        calificacion = 'Excelente';
    }

    document.getElementById('resultado').innerText = `La calificación es: ${calificacion}`;
}
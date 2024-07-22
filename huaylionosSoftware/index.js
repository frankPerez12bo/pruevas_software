function calcularHipotenusa() {
    const cateto1 = parseFloat(document.getElementById('cateto1').value);
    const cateto2 = parseFloat(document.getElementById('cateto2').value);
    if (!isNaN(cateto1) && !isNaN(cateto2)) {
        const hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2).toFixed(2);
        document.getElementById('resultado').innerText = `La hipotenusa es: ${hipotenusa}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, ingrese valores válidos.';
    }
}
let btnDlete = document.getElementById('btnDelete');

btnDlete.addEventListener('click',(e)=>{
    e.preventDefault();
    reset(calcularHipotenusa);
    e.stopPropagation();
});
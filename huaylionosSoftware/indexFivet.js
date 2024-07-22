let form = document.getElementById('form');
let space = document.getElementById('space');

form.addEventListener('submit',(e)=>{
    let monto = parseFloat(document.getElementById('monto').value);
    let porcentaje = parseFloat(document.getElementById('porcentaje').value);

    let resutado = monto * porcentaje;

    space.innerHTML = `
    <p>RESULTADO ES : <b> ${resutado} </b></p>
    `;

    
});
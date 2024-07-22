let contador=0;
const form = document.getElementById('loginForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
e.preventDefault();
let contador="";
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const autor= document.getElementById('autor').value;
const pasword=document.getElementById('password').value;
const edad = parseInt(document.getElementById('edad').value);
const identificacion = document.getElementById('identificacion').value;
const sueldo = parseFloat(document.getElementById('sueldo').value);




let btnDelete=document. createElement('button');
btnDelete.innerText='Eliminar';
btnDelete.style.backgroundColor='crimson';
btnDelete.style.color=' #fff';
btnDelete.style.transform= 'translateX(30.5vw)';

btnDelete.addEventListener('click',(e)=>{
    e.preventDefault();
    resultado.reset();
})

resultado.innerHTML = `
<article class="articleResultado">
    <p>Nombre: ${nombre} ${apellido}</p>
    <p>Autor : ${autor} <p/>
    <p>Autor : ${pasword} <p/>
    <p>Edad: ${edad}</p>
    <p>Identificación: ${identificacion}</p>
    <p>Precio : $${sueldo}</p>
</article> 
`;
resultado.appendChild(btnDelete);
form.reset();
contador++;
});
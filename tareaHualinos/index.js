/*var nombre=prompt("dime tu nombre: ");
var aplellido=prompt("dime tu apellido: ");
var dni=prompt("dime DNI");
var sueldo=parseInt(prompt("dime el monto:"));

var descuento=sueldo * 0.10;
var bruto=sueldo - descuento;



document.write("<br>");
document.write("Nombre : " + nombre);
document.write("<br>");
document.write("Apellido : " + aplellido);
document.write("<br>");
document.write("DNI : " + dni);
document.write("<br>");
document.write("sueldo basico es : " + sueldo);
document.write("<br>");
document.write("sueldo bruto es : " + bruto);
document.write("<br>");
document.write("descuento es : " + descuento);
*/
var btn=document.querySelector('.btn-warning');

btn.addEventListener('click',function(){
    parseInt(prompt("Dime el monto : "));
});


function insertarImage(){
    const btnInsertar=document.getElementById('btnInsertar');
    const spaceContainer=document.getElementById('spaceContainer');

    btnInsertar.addEventListener('change',function(){
        const files=this.files[0];
        const reader= new FileReader();

        reader.onload=function(i){
            const img=document.createElement('img');
            img.src=i.target.result;
            spaceContainer.appendChild(img);
            img.addEventListener('dblclick',function(){
                this.remove();
            })
        };
        reader.readAsDataURL(files);
    });
}


//declarar la variable del id del form

let transtionForm=document.getElementById('transtionForm');


transtionForm.addEventListener('submit', function(e){
  e.preventDefault();
  let forData=new FormData(transtionForm);
  let table=document.getElementById('tablaTransccion');

  let insertRowRef=table.insertRow(-1);
  let inserCellsRef=insertRowRef.insertCell(0);
  inserCellsRef.textContent =forData.get('tySelector');

  inserCellsRef=insertRowRef.insertCell(1);
  inserCellsRef.textContent=forData.get('labelNombre');

  inserCellsRef=insertRowRef.insertCell(2);
  inserCellsRef.textContent=forData.get('labelApellido');

  inserCellsRef=insertRowRef.insertCell(3);
  inserCellsRef.textContent=forData.get('labelDni');

  inserCellsRef=insertRowRef.insertCell(4);
  inserCellsRef.textContent=forData.get('labelSueldo');

  inserCellsRef=insertRowRef.insertCell(5);
  inserCellsRef.textContent=forData.get('labelEdad');

  inserCellsRef=insertRowRef.insertCell(6);
  let btnDelete=document.createElement('button');
  btnDelete.textContent='ELIMINAR';
  btnDelete.style.backgroundColor='crimson';
  inserCellsRef.appendChild(btnDelete);
  btnDelete.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.remove(inserCellsRef);
  });

  transtionForm.reset();
})






function converFormDataToTranstionObjet(formDataTranstion) {
  let transtionType=formDataTranstion.get('tySelector');
  let transtionNombres=formDataTranstation.get('labelNombre');
  let transtionApellidos=formDataTranstation.get('labelApellido');
  let transtionDni=formDataTranstation.get('labelDni');
  let transSueldo=formDataTranstation.get('labelSueldo');
  let transEdad=formDataTranstation.get('labelEdad');

return{'transtionType':tySelector,
'transtionNombres':labelNombre,
'transtionApellidos':labelDni,
'transtionDni':tySelector,
'transSueldo':labelSueldo,
'transEdad':labelEdad,
}


}
console.log(myObjetTranstion);

//funtion para escribiir la primara letra en mayusculada


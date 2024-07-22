//funtion para escribiir la primara letra en mayusculada

function capitalizeFirstLetter() {
    let input = document.getElementById("nombre");
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
  }
function capitalizeFirstLetterLastName() {
    let input = document.getElementById("apellido");
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
  }
  function capitalizeFirstLetterAutorName(){
    let input = document.getElementById("autor");
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
  }
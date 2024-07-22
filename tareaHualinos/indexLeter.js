function capitalizeFirstLetter() {
    let input = document.getElementById("labelNombre");
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
  }
function capitalizeFirstLetterLastName() {
    let input = document.getElementById("labelApellido");
    let words = input.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    input.value = words.join(' ');
  }

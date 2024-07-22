localStorage.setItem("favoriteFood","pizza");
localStorage.getItem("favoriteFood");

var myArray=[2,4,8,9,10];

let newAray=json.stringify(myArray);
localStorage.setItem("nuevoArray",myArray);
localStorage.getItem("nuevoArray");
let nArr=localStorage.getItem("nuevoArray");

JSON.parse(nArr);
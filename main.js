
let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

let decrescente = array.sort((a,b)=> a - b).reverse();

console.log(decrescente);

let crescente = array.sort((a,b)=> a - b);
console.log(crescente);

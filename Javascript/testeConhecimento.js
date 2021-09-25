const arr = [1,2,4,3,5];

const latinhas = ["Coca-cola", "Sprit", "Tubaina"];
const latinhas2 = ["Koka-kola", "Fanta Uva"];
const latinhasConcat = latinhas.concat(latinhas2); 

const rockets = [
    { country: "Russia", launches: 32 },
    { country: "Brasil", launches: 75 },
    { country: "China", launches: 81 },
    { country: "Alemanha", launches: 09 },
    { country: "Japão", launches: 16 }
];

console.log(arr);
console.log(arr.reverse());
console.log(arr.sort());

const celsius = [ 0, 5, 7, 19, 34, 65, 4 ];
const toFarenheit = celsius.map( value => (value * 9/5)+32 );
console.log(celsius.join('-').toString());
console.log(toFarenheit.toString());
const funToFarenheit = (celsius) => (celsius * 9/5) + 32;
const funToFarenheit2 = function(celsius) {
    return (celsius * 9/5) + 32;
}
function funToFarenheit3(celsius){
    return (celsius * 9/5) + 32;
}
console.log( funToFarenheit(0) );
console.log( funToFarenheit2(0) );
console.log( funToFarenheit3(0) );

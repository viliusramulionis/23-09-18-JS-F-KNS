let text = 'Labas Pasauli';

if(11 === 10) {
    console.log('Vienuolika yra lygu dešimt');
} else if(10 === 10) {
    console.log('Skaičius yra lygus dešimt');
} 
// else if() {
//     // ....
// }
// else if() {
//     // ....
// }
else {
    console.log('Skaičius nėra lygus dešimt');
}

// Riestiniai skliaustai nėra būtini jei atliekamas veiksmas yra vienos eilutės ilgio.
if(true)
    console.log('Reikšmė yra teigiama');

let x = 15;

if(x === 15) 
    console.log('X yra lygu penkiolikai');

let y = '15';

//Du lygybės ženklai nurodo tik reikšmės tikrinimą
//Trys lygybės ženklai nurodo reikšmės ir duomens tipo tikrinimą
if(x === y) {
    console.log('X yra lygu Y');
}

let stringas = 'Pastato 56165165!213123123fasadaS';
            //  012345
console.log(stringas.length);

console.log('Paskutinė raidė:');

let paskutineRaide = stringas[stringas.length - 1];
let priespaskutineRaide = stringas[stringas.length - 2];
console.log(paskutineRaide + priespaskutineRaide);

const gamintojas = 'Sony';
const zenklas = 'Vaio';

console.log(gamintojas + zenklas);
console.log('Produkto pavadinimas:', gamintojas, zenklas);

// const pavadinimas = 'Produkto pavadinimas: ' + gamintojas + ' ' + zenklas;
// Template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const pavadinimas = `Produkto pavadinimas: ${gamintojas} ${zenklas}`;
console.log(pavadinimas);

let phase = false;

if(!phase) {
    console.log('Statusas yra neigiamas');
}

phase = !phase;

if(phase) {
    console.log('Statusas yra teigiamas');
}

let k = 20;
let l = 25;

//Jeigu k lygu dvidešimt IR l lygu dvidešimt penkiems
// if(k === 20) {
//     if(l === 25) {
//         console.log('Abi kondicijos yra teigiamos');
//     }
// }

//https://www.w3schools.com/js/js_comparisons.asp
//Abi kondicijos privalo būti teigiamos
if(k === 20 && l === 25) 
    console.log('Abi kondicijos yra teigiamos');

if(k === 22 || l === 25) 
    console.log('Bent viena kondicija išsipildė');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
let string2 = 'Pavyzdys';
string2 = string2.replace('v', 'a');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
string2 = string2.replaceAll('y', 'i');

console.log(string2);

//Atsitiktinio skaičiaus generavimo funkcija
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaicius = rand(5, 25);

console.log(skaicius);
console.log(rand(10, 105));

// Skaičiaus suapvalinimas iki sveiko skaičiaus pagal matematinę taisyklę
console.log(Math.round(3.51));
// SKaičiaus apvalinimas iki žemesnio sveiko skaičiaus
console.log(Math.floor(3.99));
// SKaičiaus apvalinimas iki didesnio sveiko skaičiaus
console.log(Math.ceil(3.01));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// Suapvalinimui iki nurodyto skaičiaus po kablelio

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
skaicius = +3.556.toFixed(1);

console.log(skaicius);
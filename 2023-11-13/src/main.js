import standartineFunkcija, { pirmas, x } from './helpers/pirmas.js';
import { antras, pirmas as antrasPirmas } from './helpers/antras.js';
import * as visiEksportai from './helpers/trecias.js';

console.log(visiEksportai);

// const objektas = {
//     raktas: 'reiksme'
// }

// const { raktas } =  objektas;

console.log('Pagrindinis failas paleistas');

console.log(x);

pirmas();

standartineFunkcija();

antrasPirmas();

visiEksportai.trecias();
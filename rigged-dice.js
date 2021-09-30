const prompt = require('prompt-sync')();

const sides = Number(prompt('Hom many sides should the dice have? '));
const riggedSide = Number(prompt('what side should be rigged '));

let roll = Math.cell(Math.random() * sides +1);

if (roll === sides + 1) {
    roll = riggedSide;
}

console.log('Your roll was', roll);
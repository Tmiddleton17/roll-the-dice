const prompt = require('prompt-sycn')();

const sides = Number(prompt('How many sides should the dice have?: '))

const diceRoll = Math.floor( Math.random() * sides) + 1;

console.log('You have rolled a: ', diceRoll);
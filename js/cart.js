'use strict';

const { CategoryScale, Chart } = require("chart.js");

console.log ('Hello from the cart js file');

// There are three things happening in this file:
// 1.) We are receiving the data from the gift and hand files and 
//     compiling them into a shopping cart . (This was done in lab 14)
// 2.)We are creating a Chart.js to show the percentage(or number) of gifts/hands
//     promised, versus still available. (Ie, number of people reached, etc.)
// 3.) We are taking user input. 
//         Name
//         Email Address       
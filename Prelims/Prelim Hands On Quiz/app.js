//Garcia, Louis Jae
//WD 201

const calc = require('./calculations.js');

var rateHour = 300;
var HoursWork = 4;
var perDay = 6;
const grossIncome = rateHour * HoursWork * perDay;

const tax = calc.multiply(grossIncome, 0.1);
const sss = 1200;
const pagibig = 300;
const philhealth = 400;

const totalDeduc = calc.add(tax + sss + pagibig + philhealth);
const netSal = calc.subtract(grossIncome, totalDeduc);

console.log('The gross income is ', grossIncome);
console.log('Tax: ', tax);
console.log('SSS: ', sss);
console.log('Pag-Ibig fund: ', pagibig);
console.log('PhilHealth: ', philhealth);
console.log('Total deductions: ', totalDeduc);
console.log('The net salary: ', netSal);

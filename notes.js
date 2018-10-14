/*
npm i express express-session body-parser massive axios react-router-dom dotenv redux react-redux redux-promise-middleware passport passport-auth0 

https://github.com/steven-isbell/bcrypt-demo

*/ 

// m = p [ r(1 + r)^t ] / [ (1 + r)^t – 1]
let balance = 300000;          // balance
let rate = 6.00;               
  // rate is the annual interest rate in percentage form. 
  // rate/100 is the annual interest rate in decimal form.
  // rate/100/12 is the monthly interest rate in decimal form.
let payment = 1798.65;         // monthly payment
let bpmt, ppmt                 // monthly balance, principle payment
let ipmt;                      // monthly interest payment 
let prepmt;                    // monthly prepayment  
let term;                      // number of monthly payments remaining 

term = -Math.log(1 - 0.005*300000/1798.65) / Math.log(1 + 0.005);

//// round precisely 
//// http://www.jacklmoore.com/notes/rounding-in-javascript/
let round = (value, decimals) => {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//// find monthly payment amount (given bal, rate, term)
let monthlyPayment = (bal, rate, term) => {
  rate = rate/100/12; // convert rate to monthly rate in decimal form 
  let payment = bal*rate*(Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
  return round(payment, 2); 
}

//// find number of monthly payments (given bal, rate, payment amount)
let termInMonths = (bal, rate, payment) => {
  rate = rate/100/12; // convert rate to monthly rate in decimal form 
  let numOfPayments = -Math.log(1 - rate*bal/payment) / Math.log(1 + rate);
  return round(numOfPayments, 2);
}

let termInYears = (bal, rate, payment) => {
  let num = round(termInMonths(bal, rate, payment)/12, 2); 
  let years = Math.floor(num); 
  let dec = num - Math.floor(num); // get decimal part of the number 
  let months = Math.ceil(dec/.100);  
  return `${years} yrs, ${months} mons`
}

console.log(term);
console.log(monthlyPayment(300000, 6, 360));
console.log(termInMonths(300000, 6, 1798.65)); 
console.log(termInYears(300000, 6, 1800)); 


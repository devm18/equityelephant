// EDGE CASE Some of these functions will fail if rate is 0. 

const today = new Date();
const yyyy = today.getFullYear();
const mm = today.getMonth()+1; //January is 0!
const dd = today.getDate();

/* round value precisely to decimalPoint */ 
/* http://www.jacklmoore.com/notes/rounding-in-javascript/ */
const round = (value, decimalPoint) => {
  return Number(Math.round(value+'e'+decimalPoint)+'e-'+decimalPoint);
}
// console.log(round(1.005,2)); // 1.01
// console.log(round(1.444,2)); // 1.44
// console.log(round(1.445,2)); // 1.45

const findMonthlyPayment = (bal, rate, term) => {
  rate = rate/100/12; // convert rate to monthly rate in decimal form 
  const payment = bal * rate * (Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
  return round(payment, 2); 
}
// console.log(findMonthlyPayment(200000, 6, 360)); //1199.10

const findTerm = (bal, rate, payment) => {
  const mRate = rate/100/12; // convert to monthly rate in decimal form 
  const numOfPayments = -Math.log(1 - mRate*bal/payment) / Math.log(1 + mRate);
  return round(numOfPayments, 2);
}
console.log(findTerm(200000, 6, 1199.10)); // 360

const exprTermInYearsMonths = (term) => {
  const termDivBy12 = term/12;
  const termYears = Math.floor(termDivBy12); // get integer part of number
  const termMonths = round((termDivBy12-termYears)*12,0); // get decimal part & convert to integer
  const y = (termYears === 1) ? 'year' : 'years'; 
  const m = (termMonths === 1) ? 'month' : 'months'; 
  return termYears+' '+y+', '+termMonths+' '+m; 
}
// console.log(exprTermInYearsMonths(349))

const findCost = (bal, rate, mpmt) => {
  const mRate = rate/100/12; // convert to monthly decimal form. 
  let term = findTerm(bal, rate, mpmt); 
  let totalCost = 0; 
  let mBal = bal; 
  for (let numPmts = term; numPmts > 0; numPmts--) {
    let ipmt = mBal * mRate;  
    mBal = mBal - (mpmt - ipmt);
    totalCost += ipmt; 
  }
  return round(totalCost,2); 
}
// console.log(findCost(200000, 6, 1199.10)); // 231676.38

//////////////////////////////////////////////////////////////////////// 
/////////////////////// with monthly prepayments /////////////////////// 
const findTermWmprepmt = (bal, rate, mpmt, mprepmt) => {
  const mRate = rate/100/12; // convert to monthly rate in decimal form 
  const numOfPayments = -Math.log(1-mRate*bal/(mpmt+mprepmt))/Math.log(1+mRate);
  return round(numOfPayments, 2);
}
// console.log(findTermMprepmt(200000, 6, 1199.10, 0)); // 360
// console.log(findTermMprepmt(200000, 6, 1199.10, 100)); // 294.46

const findCostWmprepmt = (bal, rate, mpmt, mprepmt) => {
  const mRate = rate/100/12; // convert to monthly decimal form. 
  let term = findTermWmprepmt(bal, rate, mpmt, mprepmt); 
  let totalCost = 0;
  let mBal = bal; 
  for (let numPmts = term; numPmts > 0; numPmts--) {
    let ipmt = mBal * mRate;  
    mBal = mBal - (mpmt + mprepmt - ipmt);
    totalCost += ipmt; 
  }
  return round(totalCost,2); 
}
// console.log(findCostwMprepmt(200000, 6, 1199.10, 0)); // 231677
// console.log(findCostwMprepmt(200000, 6, 1199.10, 100)); // 182538


module.exports = {
  today, yyyy, mm, dd,
  round,
  findMonthlyPayment,
  findTerm,
  exprTermInYearsMonths,
  findCost,
  //////////////
  findTermWmprepmt,
  findCostWmprepmt
};


/* 
NB: rate refers to annual interest rate (the input value from the user). 
So, remember to convert it in my formulas: 
6%    = rate        - annual interest rate, in percentage form
.06   = rate/100    - annual interest rate, in decimal form
.005  = rate/100/12 - monthly interest rate, in decimal form

NB: term refers to the number of monthly payments. 

Find payment (1199.10), given: 
  bal, rate, term
  200000, 6, 360

Find term (360), given: 
  bal, rate, pmt
  200000, 6, 1199.10
*/

/* 
// m = p [ r(1 + r)^t ] / [ (1 + r)^t – 1]
const beg_bal = 300000;          // beginning balance
const rate = 6.00;               // rate
const term;                      // number of monthly payments remaining 
const mpmt = 1798.65;            // monthly payment
const ipmt;                      // monthly interest payment 
const ppmt;                      // monthly principle payment
const prepmt;                    // monthly prepayment  
const end_bal;                   // ending balance 
*/

/* todo: 
1. convert the values in the objects within an array into comma separated strings surrounded by parenthesis so that each object can be inserted as a row into a table.  

*/

let debts = [
  {
    debt_name: 'visa', 
    beg_bal: 100, 
    rate: 1, 
    mpmt: 10, 
    term: '',
    ipmt: 0,
    ppmt: 0,
    prepmt: 0,
    end_bal: 0 
  }, 
  {
    debt_name: 'MC', 
    beg_bal: 200, 
    rate: 2, 
    mpmt: 20, 
    term: '',
    ipmt: 0,
    ppmt: 0,
    prepmt: 0,
    end_bal: 0
  }
]

let objectsToStringsArr = (arr) => {
  arr[0].debt_name
  
  arr.forEach(e => {
    let str = []; 
    for(let prop in obj) {
      if (isNaN(obj.prop)) {
        return null; 
        str.push('prop'); 
      } else {

      }
  })
    
  
  return JSON.stringify(newArr); 
}

let arrOfStrings = objectsToStringsArr(debts); 
console.log(arrOfStrings);



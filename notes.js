
/*
npm i express express-session body-parser massive axios react-router-dom dotenv redux react-redux redux-promise-middleware passport passport-auth0 
https://github.com/steven-isbell/bcrypt-demo


PRIORITIES 
  FIRST - top priorities: 
    addUser (create)
      - post a row in users 
      - post a row in prepayments 
      - post a row in debts
      - enables access to calculator

    removeUser (delete)
      - delete row in users 
      - delete row in prepayments 
      - delete row(s) in debts
      - disables access to calculator

    login (get)
      - gets user_id from row in user, where ??????.auth_id = users.auth_id
      - gets info from row in prepayments, where users.user_id = prepayments.user_id
      - gets info from row(s) in debts, where users.user_id = debts.user_id
      - gets info from row in results, where users.user_id = results.user_id
        
    saveInputs (put) 
      - update row in prepayments, where users.user_id = prepayments.user_id
      - update row(s) in debts, where users.user_id = debts.user_id

    calculate (put, get)
      - update row in prepayments, where users.user_id = prepayments.user_id
      - update row(s) in debts, where users.user_id = debts.user_id
      - update row(s) in results, where users.user_id = results.user_id
    
    Add a isLoading gif, eg sim-Fullstack_app_demo

  SECOND 
  - mediaQuery for iphone 
  - mediaQuery for tablet 

  - dropdown 
  - links

  - graph (placeholder)
   
/// Need to read docs on massive.query. 

USE balance instead of principle bc: 
beg balance
end balance 

Jerry Chen  
    FIRE (Financial Independent Retire Early)
    Burn Rate 

Anthony Magno  
https://github.com/anthony62490/personal-project-photo-manager/blob/master/server/controller.js
controller.js  33 searchQuery
editPicInfoController.js  151 QueryStr 



// Example of inserting scalar values from redux to db
let query1 = `INSERT INTO prepayments (monthly_prepayment, yearly_prepayment, yearly_prepayment_date, one_time_prepayment, one_time_prepayment_date) VALUES (${monthly_prepayment}, ${yearly_prepayment}, '${yearly_prepayment_date}', ${one_time_prepayment}, '${one_time_prepaymentDate}') WHERE user_id = '${user_id}';`


Object.keys(obj) // returns an array of key from obj, and then map key:value pairs to state. 

// Middleware supplies the _PENDING, _FULFILLED, _REJECTED 



src/calculator/CalcReducer.js
src/calculator/Debts.js
src/calculator/Debt.js
server/calcCtrl.js


TODO: 
UX goal: 
1. type in info for prepayment box and default debt box, 
2. click Add Debt button, and type in info, etc, 
3. click Save Inputs or Save & Calculate to save to DB. 

PROBLEM: The <Add-Debt> button refreshes the screen and wipes out the inputs, which get reloaded with data from DB. 

SOLUTION: 
1. Add <Save-Inputs> button with axios call to each box of inputs = poorer user interface. 
2. use Onblur to update the database when the focus leaves box of inputs. - should work, 
3. delay refreshing of screen ... 


*/
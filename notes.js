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

// login credentials 
jmi.auth0.com johnmi@protonmail.com Timpffa78&*

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


Seven steps for efficiently creating a web app: 

1. Wireframe   
  Create a crud, stick-figured picture of every interactive UI part of the app (every input, button, link, etc). (Use a pencil & notepad. If you already know how to use digital wireframe technology, fine, but now is not the time learn how to use one.) 

  Define every consequence of the user's use of every UI interactive feature. (If clicking on a button causes data to be sent from the front-end to the back-end to & from the database back to the back-end to the front-end, then list every one of those actions until the app returns to a state of rest. This list will provide a chain of causality that you can follow to debug errors. 
  
  (It's easier to add than remove features. So, if building both a mobile & desktop responsive app, design mobile interactivity first, and then add features a second wireframe for that desktop that contains just those additional features.) 

2. Database (heroku.com - postico/pgweb)
  Define the tables and columns. Use your wireframe as a guide.
  
  Use postico/pgweb and hard-coded data to create every single SQL command you will need. And test them all in postico/pgweb. (Again, use your Wireframe as a guide for what inputs and outputs you want from the database.)
  
  Save the SQL statements with the hard-coded data. (You will use them later to copy & paste into the backend db.)

3. Backend 
  In the db, create files for sql statements. 
  Copy & paste the SQL statements from postico/pgweb, and replace the hard-coded data with variables ($1, $2, $3, etc). 

  In server/controller.js, create the js functions that pass-thru the arguments for those db sql statements.   

  In server/index.js, create endpoints for connecting to the frontend. 

4. Frontend: Postman 
  Translate the hard coded data in the postico/pgweb SQL statements into JSON files for use in Postman. 

  Create postman commands (get, post, put, delete) that correspond to the database SQL commands (get, insert into, update, delete).

  Test the endpoints. (Do the postman commands affect the database?) 
  
5. Frontend: Interactive Elements
  Create basic react/html pages to contain User Interface interactive elements: inputs, buttons, form fields, etc, and outputs from (local or redux) state. 
    
6. Frontend: Axios
  Create/insert axios calls, componentDidMounts, etc. Test them. (If you completed steps 1-4, then you know that any errors you encounter are in the front end.)

7. Frontend: Face
  Create the html/css stuff, headers, footers, logos, pictures, media queries, etc. 
  
  Add third party software (auth0, chartJS, etc). 
  
*/
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require('passport'); 

const { /*login*/strategy, getUser, logout } = require(`${__dirname}/authCtrl`);

const { test, getPrepayments, getDebts, addDebt, removeDebt, saveInputs } = require("./inputsCtrl");

const { calculate } = require("./calcCtrl");

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    // console.log(process.env.CONNECTION_STRING); // check
    return app.set('db', db)
  }) 
  .catch(console.log);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 864000000 } /* 24 hours */
    // cookie: { maxAge: 864000000 } /* 24 hours */
    /* 1000ms * 60sec * 60min * 24hrs */
  })
);

/* beg of Auth0 *************************************** */
app.use(passport.initialize());
app.use(passport.session()); 
passport.use(strategy); 

passport.serializeUser((user, done) => {
  console.log('\n PASSPORT.SERIALIZERUSER: \n', user);
  const db = app.get('db'); 
  db.getUserByAuthId([user.id])
  .then(response => {
    if (!response[0]) {
      db.addUserByAuthId([
        user.emails[0].value, 
        user.displayName, 
        user.id
      ])
      .then(res => {
        done(null, res[0]);
      })
    } else {
      return done(null, response[0]); 
    } 
  })
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
}); 

function authenticated (req, res, next) {
  if (req.user) { 
    //console.log("\nAUTHENTICATED.REQ.USER", req.user); 
    next(); 
  } else {
    res.sendStatus(403); 
  }
}; 

// endpoints (for authCtrl)
app.get('/login', passport.authenticate('auth0', { 
  successRedirect: process.env.REACT_APP_CALCULATOR,
  failureRedirect: '/login'
}));
app.get('/getUser', authenticated, getUser); 
app.get('/logout', logout);
/* end of auth0 *************************************** */

// endpoints (for calcCtrl)
app.get('/test', test); 
app.get('/getPrepayments/:user_id', getPrepayments); 
app.get('/getDebts/:user_id', getDebts); 
app.post('/addDebt', addDebt); 
app.delete('/removeDebt/:user_id/:debt_id', removeDebt); 
app.put('/saveInputs/:user_id', saveInputs);
app.post('/calculate', calculate); 

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port}`));

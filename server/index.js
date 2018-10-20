require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require('passport'); 

const { strategy, getUser, logout } = require(`${__dirname}/authCtrl`);

const { test, saveInputs } = require("./calcCtrl");

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
    saveUninitialized: false
    // cookie: { maxAge: 864000000 } /* 24 hours */
    /* 1000ms * 60sec * 60min * 24hrs */
  })
);

/* beg of Auth0 *************************************** */
app.use(passport.initialize());
app.use(passport.session()); 
passport.use(strategy); 

passport.serializeUser((user, done) => {
  console.log(user);
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

app.get( '/login', 
  passport.authenticate('auth0', { 
    // successRedirect: '/me', 
    successRedirect: 'http://localhost:3000/calculator', 
    failureRedirect: '/login'
    // failureFlash: true 
  })
);
app.get('/me', getUser);
app.get('/logout', logout);
/* end of auth0 *************************************** */



// endpoints
app.get("/api/test", test); // test endpoint // good 
app.post("/api/inputs", saveInputs);

// app.get("/api/items", getItems);
// app.delete("/api/item/:id", removeItem);
// app.put("/api/item/:id", updatePrice);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port}`));

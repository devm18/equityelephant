const Auth0Strategy = require("passport-auth0");

const strategy = new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/login',
  scope: "openid email profile"
}, 
(accessToken, refreshToken, extraParams, profile, done) => { 
  // console.log(profile) 
  // accessToken is the token to call Auth0 API (not nec in most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user

  // check db if user exists
  // if y, return user 
  // if n, add user to db, and then return user 

  return done(null, profile);
}); 

const getUser = (req, res) => {
  if (req.user) { res.status(200).json(req.user) }
  else { res.status(400).json({ message: 'Not logged in'}) }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect(process.env.REACT_APP_HOME); 
  })
}

module.exports = {
  strategy,
  getUser,
  logout
};



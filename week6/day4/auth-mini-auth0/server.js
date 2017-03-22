const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('expressSession');
const passport = require('passport');
const passportAuth0 = require('passport-auth0');

const app = express();
const port = 3000;

app.listen(port, function() {
	console.log('Listening on port', port)
})

app.use(session({secret: 'some random string'}))

app.use(passport.initialize());

app.use(passport.session());



passport.use(new Auth0Strategy({
    domain: 'dbarrett24.auth0.com',
    clientID: 'wNXWNQ1yI57mLeZtWZQsMAkOpubjrhpM',
    clientSecret: 'TVWlnsmFmBgvkc2t2U3GoVaCsXGa5gwWM0kyleBp9n9ODHCMtbuuvEHqTFaWIpf0',
    callbackURL: '/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


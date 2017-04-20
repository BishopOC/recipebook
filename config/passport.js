const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

passport.use(new LocalStrategy({
  usernameField: 'name'
},
  function howWeAuth(username, password, done){
    User.findOne({name: username}, function(err, user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false, {
          msg: 'user not found'
        });
      }
      if(!user.validPassword(password)){
        return done(null, false, {
          msg: 'Authentication failed'
        });
      }
      return done(null, user);
    });
  }));

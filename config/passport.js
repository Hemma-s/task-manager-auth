const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password' });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

// Store user ID in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Retrieve user details from the session using the ID
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
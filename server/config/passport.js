const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;
const bcrypt = require('bcrypt');

module.exports = (passport)=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id)
    });

    passport.deserializeUser((username, done)=>{
        User.findOne({
            where: {
                email: username
            }
        }).then((user)=>{
            if(user === null){
                done(new Error('Wrong user id.'))
            }
            done(null, user);
        })
    });

    passport.use('local', new LocalStrategy((username, password, done)=>{
        User.findOne({
            where: {
                'email': username
            }
        }).then((user)=>{
            if(user === null){
                return done(null, false, {message: 'Invalid credentials.'})
            }

            bcrypt.compare(password, user.password, (err, res)=>{
                if(res){
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Incorrect credentials.'})
                }
            });

            return done(null, false, { message: 'Invalid credentials.' })
        })
    }));


}
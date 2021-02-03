const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const {User} = require("../models");

module.exports = (passport) => {
    passport.use(new LocalStrategy({
            usernameField: "userEmail",
            passwordField: "userPassword",
        },async (userEmail, userPassword, done) => {
            try {
                const exUser = await User.findOne({where: {userEmail}});
                if (exUser) {
                    const check = await bcrypt.compare(userPassword, exUser.userPassword);
                    if (check) {
                        done(null, exUser);
                    } else {
                        done(null, false, {message: "잘못된 비밀번호입니다"});
                    }
                } else {
                    done(null, false, {message: "잘못된 이메일입니다"});
                }
            } catch (error) {
                console.log('에러');
                console.error(error);
                next(error);
            }
        }
        )
    );
};
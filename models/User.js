const mongoose = require("mongoose");  // 몽구스 불러옴
const bcrypt = require("bcrypt"); // bcrypt 불러옴
const saltRounds = 10; // slat 값이 몇자리인지 나타냄

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
      },
      email: {
        type: String,
        trim: true, // 띄어쓰기 제거
        unique: 1,  // 같은 이메일 사용 X
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: { //유저의 lastname
        type: String,
        maxlength: 50,
      }, 
      role: {
        type: Number, // 0: 일반사용자, 1: 관리자
        default: 0,
    },
    Image: String,
    token: {    // token을 이용해 유효성 관리
        type: String,
    },
    tokenExp: { // token 사용기한 설정
        type: Number,
    }
});

// user 정보를 저장하기전에 
userSchema.pre("save", function (next) {
    var user = this;

    if(user.isModified("password")) { // 비밀번호를 바꿀 때만
        // 비밀번호 암호화 시킴
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;  
                // user.password : plainPassWord
                // hash : 암호화된 비밀번호
                next(); // 전저리가 끝난 후 후작업하기 위해 넘겨준다.
            });
        });
    } else { // 비밀번호가 아닌 다른 데이터를 변경한다면 바로 넘겨준다.
        next();
    }
});

const User = mongoose.model("User", userSchema);  // 해당 스키마를 Model로 감싸줌

module.exports = { User }; // 다른 곳에서도 사용할 수 있도록 함
const mongoose = require("mongoose");  // 몽구스 불러옴

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

const User = mongoose.model("User", userSchema);  // 해당 스키마를 Model로 감싸줌

module.exports = { User }; // 다른 곳에서도 사용할 수 있도록 함
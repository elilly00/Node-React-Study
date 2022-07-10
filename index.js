const express = require("express");  // 다운받은 모듈 불러옴
const app = express();   // function을 이용해 새로운 express app 생성
const port = 5000;       // port는 아무거나 설정해도 됨
const bodyParser = require("body-parser"); // body-parser을 가져옴

const config = require("./config/key");  // config.js를 가져옴

const { User } = require("./models/User");  // User Model을 가져옴


// 'application/x-www-from-urlencoded'로 된 데이터를 분석해 가져올 수 있게 함
app.use(bodyParser.urlencoded({ extended: true }));

// 'application/json'로 된 데이터를 분석해 json형식으로 parsing해 가져올 수 있게 함
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI) // MongoDB 연결
  .then(() => console.log("MongoDB Connected..."))  // 연결 성공 시 출력
  .catch((err) => console.log(err));  // 에러 발생 시 출력

  
  // root directory에 오면 다음과 같은 문자가 출력됨
  app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });
  
// Register Route
app.post("/register", (req, res) => {
  
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 DB에 넣어준다

  const user = new User(req.body); // request.body(json형식의 파일)로 client에서 보내는 정보를 받아준다.

  user.save((err, userInfo) => { // 'save()' : mongoDB에서 오는 정보 method(client에서 보낸 정보들이 user model에 저장됨)
    if(err) return res.json({ success: false, err });
		// 성공 시 status(200) (json형식으로 정보 전달함) 
    return res.status(200).json({  
      success: true,
    });
  });
});

// 5000번 port에서 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

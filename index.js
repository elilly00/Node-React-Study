const express = require('express');  // 다운받은 모듈 불러옴
const app = express();   // function을 이용해 새로운 express app 생성
const port = 5000;       // port는 아무거나 설정해도 됨

const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://Jeong:Jeong@reactstudy.pdmtnt9.mongodb.net/?retryWrites=true&w=majority') // MongoDB 연결
  .then(() => console.log("MongoDB Connected..."))  // 연결 성공 시 출력
  .catch(err => console.log(err));  // 에러 발생 시 출력

// root directory에 오면 다음과 같은 문자가 출력됨
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 5000번 port에서 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

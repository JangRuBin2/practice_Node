// 내장  모듈 http
const http = require("http");
//모든 node 웹 서버 어플은 웹 서버 객체가 필요, createServer 메서드를 이용해 만들어 줌
const server = http.createServer((request, response) => {
  //  여기서 작업이 진행 된다
});

const mainPage = require("./module/html.js");
console.log(mainPage);

// 내장 모듈도 있다
const http = require("http");

// 함수를 안에서 사용해야되는 메서드
// 그리고 매개변수로 request, response를 해야 함 -> 프로토콜을 따라야 함 (암기 해야 함)
const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader("content-type", "text/html");
  response.end(mainPage);
});

server.listen(2080, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  }
});

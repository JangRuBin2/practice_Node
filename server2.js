// 내장  모듈 http
const http = require("http");
//모든 node 웹 서버 어플은 웹 서버 객체가 필요, createServer 메서드를 이용해 만들어 줌
const server = http.createServer();
server.on("request", (request, response) => {
  // 서버로 오는 http 요청마다 createServer에 전달 된 함수가 한번씩 호출 됨, 사실 createServer가 반환한 server 객체는 eventEmitter고 여기서 server 객체를 생성하고 리스너를 추가하는 축약 문법
});
// http 요청이 서버에 오면 node가 request와 response 객체를 전달하며 핸들러 함수를 호출. -> 실제로 요청을 처리하려면 listen() 메서드가 server 객체에서 호출이 되야 함 -> 포트 번호를 listen에 전달하면 됨(다른 방법도 있음).
const { method, url } = request;

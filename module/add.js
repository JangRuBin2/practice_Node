// 부품이라고 명시를 해줘야함
const test2 = require("./module/number-checker");
const numberChecker = require("./number-checker");

module.exports = {
  add: function (first, second) {
    // 만약에 숫자인지 문자인지 검증해주는게 true면 함수를 실행시켜줘
    if (numberChecker(first) === true) {
      return first + second;
    }
  },
};
// function add(first, second) {
//   return first + second;
// }

module.exports = function (data) {
  if (typeof data === "number") {
    return true;
  } else {
    console.error("문자가 섞여 있는뎁쇼?");
    return false;
  }
};

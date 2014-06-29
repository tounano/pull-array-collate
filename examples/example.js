var pull = require("pull-stream");
var arrCollateStream = require("../");

function plusOneMapper(num) {
  return num+1;
}

pull(
  pull.values([1,2,3,4]),
  pull.map(plusOneMapper),
  arrCollateStream(),
  pull.drain(console.log)
)
var pull = require("pull-stream");

module.exports = pull.Through( function (read) {
  var arr = [];
  var ended = false;
  return function next (end, cb) {
    if (ended) return cb(ended);
    if (end === true) {ended = true; return cb(null, arr)};
    if (end) return cb(end);

    read(end, function (end, data) {
      if (end) return next(end, cb);
      arr.push(data);
      next(end, cb);
    })
  }
})
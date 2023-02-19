//process forking di saga
const cp = require("child_process");
//basic parallel process, fork muncul bareng
const p1 = cp.fork("fibonacci.js");
const p2 = cp.fork("fibonacci.js");
const p3 = cp.fork("fibonacci.js");
const p4 = cp.fork("fibonacci.js");

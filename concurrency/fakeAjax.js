function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };
  //var randomDelay = Math.round(Math.random() * 1e4) % 8000;

  console.log("Requestting " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function getFile(file) {
  return new Promise((resolve) => {
    fakeAjax(file, resolve);
  });
}

var p1 = getFile("file1");
var p1 = getFile("file2");
var p1 = getFile("file3");

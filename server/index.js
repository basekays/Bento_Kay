var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/../client/dist'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/src/index.html'))
})

app.listen(3000, function() {
  console.log('bento app listening on port 3000');
});

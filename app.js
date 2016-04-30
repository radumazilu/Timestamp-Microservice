var express = require('express');
var moment = require('moment');
var port = Number(process.env.PORT || 3000)
var app = express();

app.listen(port, function () {
  console.log('Express server listening on port 3000');
});

app.get('/:dateorunix', function(req, res) {
  var date;
  if(isNaN(req.params.dateorunix) === false) {
    date = moment.unix(req.params.dateorunix);
    if(date.isValid() === true) {
      res.json({
        unix: date.format('X'),
        natural: date.format('LL')
      })
    }
    else {
      res.json({
        unix: null,
        natural: null
      })
    }
  }

  else if(typeof req.params.dateorunix === 'string') {
    date = moment(req.params.dateorunix);
    if(date.isValid() === true) {
      res.json({
        unix: date.format('X'),
        natural: date.format('LL')
      })
    }
    else {
      res.json({
        unix: null,
        natural: null
      })
    }
  }

});

app.get('/', function(req, res) {
  var fileName = __dirname + '/index.html';
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  })
})

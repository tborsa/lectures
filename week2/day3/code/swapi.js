// using request package to send requests. 
var request = require('request');

request({
      url: `https://swapi.dev/api/people/1`,
  }, function(error, response, body) {
      console.log(response.headers);
      console.log("+++++++++++++++++++++++++");
      console.log(body);
      var issues = JSON.parse(body);
      // callback(issues);
});


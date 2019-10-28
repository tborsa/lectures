const http = require('http');
const PORT = 8080;
const say = require('say');

const routes = {
  GET:{
    '/': function (req, res) {
      res.end("This is the super secret spy debriefing server, make a get requst to /mission to recieve your mission.");
    },
    '/mission': function (req, res) {
      res.end("your mission should you choose to accept, what is the anser to (23+56*4)");
    },
    [`/${23+56*4}`]: function (req, res) {
      say.speak('Congragulations agent mission success');
      res.end("Congragulations agent mission success");
    }
  },
  DEFAULT: function (req, res) {
    res.end("This is the super secret spy debriefing server, make a get requst to /mission to recieve your mission.");
  }
};

const server = http.createServer(function respondToRequests(req, res) {
  if (req.method in routes && req.url in routes[req.method]) {
    routes[req.method][req.url](req,res);
  } else {
    routes["DEFAULT"](req,res);
  }
});

server.listen(PORT, () => {
  console.log("server listening on PORT " + PORT);
});

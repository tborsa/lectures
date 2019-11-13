const express = require('express');
const PORT = 3000;
const app = express();
const bodyparser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));

//db connection
const dbClient = require('./db-connection.js');
//db helpers
const birdzHelpers = require('./birdz-helpers.js')(dbClient);
const userzHelpers = require('./birdz-helpers.js')(dbClient);
// routes
const birdzRoutes = require('./birdz-routes.js')(birdzHelpers);
const userzRoutes = require('./birdz-routes.js')(userzHelpers);

app.use('/birdz', birdzRoutes);
app.use('/userz', userzRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

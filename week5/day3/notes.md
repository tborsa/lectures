# W05D03 SQL from our Apps

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week5/day3)

# Summary 

Today we built a pokedex web application with a focus on how to connect and integrate our app with a postgres database.

We tried to modularize our application so that the code was separated by different functionality. 

As such we had modules for:

The database connection: database-connection.js
Database query functions: data-helpers.js
Backend routes: pokemon-routes.js

Initially, we delivered the data to our client as JSON, but towards the end, we made some EJS templates to better display the information.

We demonstrated an SQL injectin attack using only the browser to drop the entire pokemon table, demonstrating why we have to be extra careful when receiving data from the user.

We then looked at how to protect against such an attack.

Always sanitize any data that you get from outside your application (eg. users, another API, etc).

### code-snippits

In order to connect with our database, we passed configuration options to the `pg` client using eviornment variables accesssed with dotenv:

```js
const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME
});

client.connect();
```

Then we used that connection in a data-helpers module to create a function for the different queries we needed.

```js
module.exports = (db) =>{
  const getAllCats = () =>{
    return db.query(`SELECT * FROM pokemons;`)
      .then((response)=>{
        return response.rows;
      });
  };
  return {
    getAllCats
  };
};
```

Finally, we gave access to these function to our route handler.

```js
const express = require('express');
const router = express.Router();

module.exports = (dataHelpers) =>{
  router.get('/',(req, res)=>{
    //get a list of all pokemon
    dataHelpers.getAllCats()
      .then((cats)=>{
        res.render('index', {cats: cats});
      });
  });

  return router;
};
```


* Thanks to (Andy)[https://github.com/andydlindsay/12weekW5D3] for the notes below


### SQL Syntax Review

#### Browse

```sql
SELECT * FROM <table>;
```

#### Read

```sql
SELECT * FROM <table> WHERE id = <id>;
```

#### Edit

```sql
UPDATE <table> SET <column> = <value> WHERE id = <id>;
```

#### Add

```sql
INSERT INTO <table> (<column1>, <column2>) VALUES (<value1>, <value2>);
```

#### Delete

```sql
DELETE FROM <table> WHERE id = <id>;
```

### Sanitization

We always want to sanitize any user-defined parameters in our SQL before running the query to prevent possible [SQL injections](https://en.wikipedia.org/wiki/SQL_injection).

In `pg`, we use [prepared statements](https://en.wikipedia.org/wiki/Prepared_statement) and pass an array of values as the second argument to `client.query()`:

```js
client.query('SELECT * FROM <table> WHERE id = $1', [<id>], (err, result) => console.log(err, result));
```

In the above example, the `id` from the array will be interpolated into the SQL query wherever `$1` appears.

### Useful Links
* [node-postgres](https://node-postgres.com/)
* [Postgres Numeric Data Types](https://www.postgresql.org/docs/11/datatype-numeric.html)
* [Little Bobby Tables](https://xkcd.com/327/)
* [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)

# W05D03 SQL from our Apps

Hi everyone!

Today we talked about how to access a Postgres database from our JavaScript code. We started by running SQL queries inside the psql terminal. We then created a command line tool that took in various arguments and executed the queries using the node package pg. Finally we covered getting the data from the database into an ejs template and rendering it for the user in a browser.

We also demonstrated an SQL injection attack and successfully deleted the villains table by giving our command line app some unexpected input. Always sanitize any data that you get from outside your application (eg. users, another api, etc).

I have completed the Express app with Edit, Add, and Delete functionality for you to look at. The repo has getting started instructions if you want to clone the repo and get it running on your machine.

As always, feel free to reach out to me on Slack if you have any questions.

Thanks and have a great day!

[Repo](https://github.com/andydlindsay/12weekW5D3)

### To Do
- [x] Create a database and query it using `psql` terminal
- [x] Perform `BREAD` actions on database from command line
- [x] Perform `BREAD` actions on database from the browser

### node-postgres

We are going to use node-postgres (`pg`) node package to interact with our database.

In order to connect with our database, we pass configuration options to the `pg` client:

```js
const pg = require('pg');

const config = {
    user: '<user name>',
    password: '<password>',
    database: '<db>',
    host: '<host>'
};

const client = new pg.Client(config);
```

Then we tell our client to connect to the database and we execute queries using the client:

```js
client.connect();
client.query('SELECT * FROM <table>', (err, result) => console.log(err, result));
```

**NOTE:** `pg` uses "error first" callbacks meaning that the first argument will always be the error (if any) or null and the second argument will be the return value from our query.

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

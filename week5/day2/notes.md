# W05D02 Database DESIGN

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week5/day2)

# Summary 

- Introduction to creating ERDs
- Data modeling example (using ERDs)
- Important principles when architecting data
- Many-to-many relationships
- Normalized database design (why and how)


---


# Relational Database contd

From building our example database we encountered a few things...


---
## ERD 📝

Diagram representing the schema of a database.
List tables and their columns/ data types.
Lines between tables represent relationships, and whether that relationship is one-to-one or one to many.
There are different style conventions for ERD's, pick one. We used crows foot notation. 

---

## Schema 📑

The skeletal structure representing how data is to be stored in a database.
Specifies Constraints on the data.

---

## Indexes 👆
A unique identifier that improves the speed of data fetches.

---

## Data Types 📚

When defining columns for the tables you will need to specify the data type. `INTEGER, VARCHAR, TEXT, BOOLEAN, DATE` are common examples.

- Primary key column. Use the name `id` and then `SERIAL PRIMARY KEY NOT NULL`.
- Names, emails, usernames and passwords can all be stored as `VARCHAR(255)`.
- Foreign key columns. Add `_id` to the singular name of the column you are referencing. Artists to albums would be `album_id`. The type would be `INTEGER` but you also should create the foreign key with `REFERENCES albums(id) ON DELETE CASCADE`.
- Dates would use the `DATE` type. If you needed [date and time](https://www.postgresql.org/docs/current/static/datatype-datetime.html) you would use `TIMESTAMP`.

You will use `INTEGER` to represent most [numbers](https://www.postgresql.org/docs/current/static/datatype-numeric.html). There are other *sizes* of integers as well.

- __SMALLINT__ -32,768 to 32,767 (thirty-two thousand)
- __INTEGER__ -2,147,483,648 to 2,147,483,647 (two billion)
- __BIGINT__ -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
- __SERIAL__ 1 to 2,147,483,647 (auto incrementing)

---

## Naming Convention 🔖

- Use `snake_case` 🐍 for table and column names.
- Pluralize tables names, column names should be singular.
- Call your primary key `id`. Why not?
- For most foreign keys use `<table>_id`.

---

## Foreign Key 🔑
A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.

The relationship between 2 tables matches the Primary Key in one of the tables with a Foreign Key in the second table.

Foreign keys can be NULL.

---

## Relationships 👪

With relational databases relationships are made with foreign keys.
The relationship links one tables entry with other table entries.
The Types of relationships are..

 - one to one
 - many to one

__The foreign key is on the many side.__ *The foreign key is on the many side.* `The foreign key is on the many side.`


# Many to Many?

 How can we achieve a many to many relationship with our current understanding of foreign keys?


---

Example Domain: A quiz system (a la quizzes in Compass) which contains questions, users, attempts, and answers to each question. A quiz can have many multi-choice questions and users can skip answering certain questions.



---

# Questions

- For Parent-child relationships where do the foreign keys go?
- What are valid vlaues for foreign keys? How foreign keys are a first class thing and can also be NULLABLE
- Storing/caching results that can be dynamically retrieved
- What if the question text changes? What if the correct answer changes?
- The lines between the entities should denote how if it is one to many or one to one. Draw dotted lines between entities that have (indirect) many-many relationships doing to intermediary / join tables and explain how they are formed by having two one-to-many relationships.

## Database Normalization 📤📥

Normalizing is Reducing duplicate information within a database. 

A denormalized database has duplicate info. 

In the following examples we'll look at a database that stores information about Artists and the Albums that they have released! 💽

Database normalization allows us to realize one of the major benefits of relational databases. We normalize our database to reduce duplicate data.

It is incredibly difficult to manage a database that stores the same information in several places. Let's imagine that we stored our Album data as follows.

```
+-----------------------------------------+
| albumns                                 |
+-----------------------------------------+
| id | title             | artist_name    |
+-----------------------------------------+
| 1  | MBDTF             | Kanye West     |
| 2  | The Blueprint     | Jay-z          |
| 3  | Aquemini          | Outkast        |
| 4  | The Doggfather    | Snoop Dogg     |
| 5  | DAMN              | Kendrick Lamar |
| 6  | College Dropout   | Kanye West     |
| 7  | Doggystyle        | Snoop Dogg     |
+-----------------------------------------+
```

---

We would consider this denormalized because the artist name is repeated for all of that artist's albums. If Snoop Dogg decides to change his name to Snoop Lion then we have to edit every Snoop album to reflect that.


In order to normalize this database we would split the data into two related tables.

```
+-----------------------------------------+ 
| albumns                                 | 
+-----------------------------------------+ 
| id | title             | artist_id      |
+-----------------------------------------+ 
| 1  | MBDTF             | 1              |
| 2  | The Blueprint     | 2              | 
| 3  | Aquemini          | 3              |
| 4  | The Doggfather    | 5              |
| 5  | DAMN              | 4              |
| 6  | College Dropout   | 1              | 
| 7  | Doggystyle        | 5              |
+-----------------------------------------+

```

```

+---------------------+
| artists             |
+---------------------+
| id | name           |
+---------------------+
| 1  | Kanye West     |
| 2  | Jay-Z          |
| 3  | Outkast        |
| 4  | Kendrick Lamar |
| 5  | Snoop Dogg     |
+---------------------+

```

---


We show that each Album belongs to an artist. The details of the artist are stored separately. When we need to gather this information together we use a query to ask the database for it in the structure that we want.

If we needed to change the name of an artist for any reason we only need to change the one field in the `artists` table.

When we create a schema it is inherently de-normalized, we naturally group all the properties associated with a thing. 
We have to do work to normalize the table, by adding new tables. 

---
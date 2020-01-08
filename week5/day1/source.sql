
{
  books:[
    {name: "Name Of the Wind",
    author: "patrick Rothfuss",
    year: 2007
    },
    {name: "Dune",
    author: "Frank Herbert",
    year: 1965
    },
    {name: "Red Rising",
    author: "Pierce Brown",
    year: 2014
    },
    {name: "Red Rising",
    author: "Pierce Brown",
    Date: 12312312312312
    }
  ],

  people: [
    {name: travis,
    favoriteBooks: [
      "Name OF the Wind",
      "Dune",
      "The Hobbit"
    ]}
  ]
}



CREATE DATABASE database_name;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE
);


INSERT INTO "artists" (id, name) VALUES(6, 'Neezy Boscareezy');

// run sql file 
\i setup.sql

UPDATE artists
SET name='Boscareezy'
WHERE id = 6;

DELETE FROM artists WHERE id = 3;
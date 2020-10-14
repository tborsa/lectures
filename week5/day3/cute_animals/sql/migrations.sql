DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  species VARCHAR(40),
  group_name VARCHAR(40),
  cuteness INTEGER,
  region VARCHAR(40),
  picture TEXT
)
DROP TABLE IF EXISTS pokemons;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS trainers;

CREATE TABLE pokemons (
  id SERIAL PRIMARY KEY,
  type VARCHAR(32),
  name VARCHAR(50),
  region_id INTEGER, 
  gender VARCHAR(20),
  number INTEGER
);

CREATE TABLE regions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  area INTEGER
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  is_active BOOLEAN
);


DROP TABLE IF EXISTS birdz;

CREATE TABLE birdz (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255),
  size INTEGER,
  call VARCHAR(500),
  image VARCHAR(500),
  sighting POINT
);
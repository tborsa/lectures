-- Schema creation

-- First delete tables if they already exist

DROP TABLE IF EXISTS artists_tags;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS artists;


-- Create tables

CREATE TABLE artists (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE
);

CREATE TABLE tracks (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  number INTEGER NOT NULL,
  album_id INTEGER NOT NULL REFERENCES albums(id) ON DELETE CASCADE
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE artists_tags (
  artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE
);


-- Seed data

INSERT INTO "tags" (id, name) VALUES(1, 'Hip-Hop');
INSERT INTO "tags" (id, name) VALUES(2, 'Rap');
INSERT INTO "tags" (id, name) VALUES(3, 'electronic');
INSERT INTO "tags" (id, name) VALUES(5, 'Rock');

INSERT INTO "artists" (id, name) VALUES(1, 'Kanye West');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(1,1);
INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(1,2);

INSERT INTO "albums" (id, title, year, artist_id) VALUES(1, 'My Beautiful Dark Twisted Fantasy', 2010, 1);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Dark Fantasy', 1, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Gorgeous', 2, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Power', 3, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('All of the Lights', 5, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('All of the Lights', 5, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Monster', 6, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('So Appalled', 7, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Devil in a New Dress', 8, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Runaway', 8, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Hell of a Life', 9, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lost in the World', 10, 1);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Who Will Survive in America', 11, 1);



INSERT INTO "albums" (id, title, year, artist_id) VALUES (2, 'College Dropout', 2004, 1);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Intro (Skit)', 1, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('We Dont Care', 2, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Graduation Day', 3, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('All Falls Down', 5, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Ill Fly Away', 5, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Spaceship', 6, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Jesus Walks', 7, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Never Let Me Down', 8, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Get Em High', 9, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Workout Plan (Skit)', 10, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('The New Workout Plan', 11, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Slow Jamz', 12, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Breathe in Breathe Out', 13, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('School Spirit (Skit 1)', 14, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('School Spirit', 15, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('School Spirit (Skit 2)', 16, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lil Jimmy (Skit)', 17, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Two Words', 18, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Through The Wire', 19, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Family Business', 20, 2);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Last Call', 21, 2);


INSERT INTO "artists" (id, name) VALUES(2, 'Jay-Z');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(2,1);
INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(2,2);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (3, 'The Black Albumn', 2003, 2);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Interlude', 1, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('December 4th', 2, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('What More Can I Say', 3, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Encore', 5, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Change Clothes', 5, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Dirt off Your Shoulder', 6, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Threat', 7, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Moment of Clarity', 8, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('99 Problems', 9, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Public Service Announcement (Interlude)', 10, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Justify My Thug', 11, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lucifer', 12, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Allure', 13, 3);
INSERT INTO "tracks" (title, number, album_id) VALUES ('My 1st Song', 14, 3);

INSERT INTO "artists" (id, name) VALUES(3, 'Ratatat');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(3,3);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (4, 'Classics', 2005, 3);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Montanita', 1, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lex', 2, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Gettysburg', 3, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Wildcat', 5, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Tropicana', 5, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Loud Pipes', 6, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Nostrand', 7, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Swisha', 8, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Kennedy', 9, 4);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Tacobel Canon', 10, 4);

INSERT INTO "artists" (id, name) VALUES(5, 'Daft Punk');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(5,3);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (5, 'Discovery', 2001, 5);

INSERT INTO "tracks" (title, number, album_id) VALUES ('One More Time', 1, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Aerodynamic', 2, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Digital Love', 3, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Harder, Better, Faster, Stronger', 5, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Crescendolls', 5, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Nightvision', 6, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Superheroes', 7, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('High Life', 8, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Something About Us', 9, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Voyager', 10, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Veridis Quo', 11, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Short Circuit', 12, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Face to Face', 13, 5);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Too Long', 14, 5);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (6, 'Homework', 1997, 5);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Daftendirekt', 1, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('WDPK 83.7 FM', 2, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Revolution 909', 3, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Da Funk', 5, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Phoenix', 5, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Fresh', 6, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Around the World', 7, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Rollin & Scratchin', 8, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Teachers', 9, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('High Fidelity', 10, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Rockn Roll', 11, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Oh Yeah', 12, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Burnin', 13, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Indo Silver Club', 14, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Alive', 15, 6);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Funk Ad', 16, 6);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (7, 'Human After All', 2005, 5);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Human After All', 1, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('The Prime Time of Your Life', 2, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Robot Rock', 3, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Steam Machine', 5, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Make Love', 5, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('The Brainwasher', 6, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('On/Off', 7, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Television Rules The Nation', 8, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Technologic', 9, 7);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Emotion', 10, 7);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (8, 'Random Access Memories', 2013, 5);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Give Life Back to Music', 1, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('The Game of Love', 2, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Giorgio by Moroder', 3, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Within', 5, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Instant Crush', 5, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lose Yourself to Dance', 6, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Touch', 7, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Get Lucky ', 8, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Beyond', 9, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Motherboard', 10, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Fragments of Time', 11, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Doin It Right', 12, 8);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Contact', 13, 8);

INSERT INTO "artists" (id, name) VALUES(4, 'Kendrick Lamar');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(4,1);
INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(4,2);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (9, 'Damn', 2017, 4);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Blood', 1, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('DNA', 2, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Yah', 3, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Element', 4, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Feel', 5, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Loyalty', 6, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Pride', 7, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Humble', 8, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Lust', 9, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Love', 10, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('XXX', 11, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Fear', 12, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('God', 13, 9);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Duckworth', 14, 9);


INSERT INTO "artists" (id, name) VALUES(6, 'Outkast');

INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(6,1);
INSERT INTO "artists_tags" (artist_id, tag_id) VALUES(6,2);

INSERT INTO "albums" (id, title, year, artist_id) VALUES (10, 'Aquemini', 1998, 6);

INSERT INTO "tracks" (title, number, album_id) VALUES ('Hold On, Be Strong', 1, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Return of the G', 2, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Rosa Parks', 3, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Skew it on the Bar-B', 4, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Aquemini', 5, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Synthesizer', 6, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Slump', 7, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('West Savannah', 8, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Da Art of Storytellin (Pt. 1)', 9, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Da Art of Storytellin (Pt. 2)', 10, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Mamacita', 11, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('SpottieOttieDopaliscious', 12, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Yall Scared', 13, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Nathaniel', 14, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Liberation', 15, 10);
INSERT INTO "tracks" (title, number, album_id) VALUES ('Chonkyfire', 16, 10);
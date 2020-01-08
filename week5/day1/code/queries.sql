SELECT album_id, count(id), avg(number) AS problem
FROM tracks
Where album_id > 5
GROUP BY album_id
HAVING avg(number) > 8;
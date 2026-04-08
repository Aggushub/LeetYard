SELECT DISTINCT a.num AS consecutivenums
FROM Logs a
INNER JOIN Logs b
ON a.num = b.num AND a.id + 1 = b.id
INNER JOIN Logs c
ON b.num = c.num AND b.id + 1 = c.id; 
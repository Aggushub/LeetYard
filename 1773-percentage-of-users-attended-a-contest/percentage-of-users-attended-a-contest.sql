SELECT r.contest_id,ROUND((COUNT(DISTINCT(r.user_id)) * 100 /  COUNT(DISTINCT(u.user_id))),2) as percentage
FROM Users u, Register r
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC;

SELECT event_day AS day,
emp_id, (SUM(out_time) - SUM(in_time)) as total_time
FROM Employees
GROUP BY emp_id, event_day;
-- ORDER BY total_time DESC;
SELECT TO_CHAR(event_day,'YYYY-MM-DD') as "day", emp_id as "emp_id", (Sum(out_time) - sum(in_time)) As "total_time"
FROM Employees
GROUP BY emp_id, event_day
ORDER BY "total_time" DESC;
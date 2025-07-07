SELECT s.machine_id, ROUND(AVG(e.timestamp - s.timestamp),3) as processing_time
FROM Activity e, Activity s
WHERE s.machine_id = e.machine_id
AND s.process_id = e.process_id
AND s.activity_type = 'start' 
AND e.activity_type = 'end'
GROUP BY machine_id;
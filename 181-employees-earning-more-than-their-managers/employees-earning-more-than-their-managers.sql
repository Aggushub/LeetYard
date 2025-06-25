SELECT e.name as Employee
FROM Employee e
LEFT JOIN Employee m
ON e.managerId = m.id 
WHERE e.managerId is not null
AND e.salary > m.salary;
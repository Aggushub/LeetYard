CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE offsetval INT;
    DECLARE result INT;

    SET offsetval = N - 1;

    SELECT DISTINCT salary
    INTO result 
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET offsetval;

    RETURN result;
END 
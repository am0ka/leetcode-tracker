-- Last updated: 6/8/2026, 11:51:31 AM
# Write your MySQL query statement below
select A.name as Employee
FROM Employee as A
JOIN Employee as B on A.managerId = B.id
WHERE A.salary > B.salary;
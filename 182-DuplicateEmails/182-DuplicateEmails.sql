-- Last updated: 6/8/2026, 11:51:30 AM
# Write your MySQL query statement below
SELECT email as Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;

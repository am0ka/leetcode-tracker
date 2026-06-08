-- Last updated: 6/8/2026, 11:51:32 AM
# Write your MySQL query statement below
SELECT firstName, lastName, city, state  FROM Person as A LEFT JOIN Address as B ON A.personId = B.personId;
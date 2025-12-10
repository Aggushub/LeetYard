SELECT TO_CHAR(TRUNC(activity_date), 'YYYY-MM-DD') AS day,
       COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE TRUNC(activity_date) > DATE '2019-06-27'
  AND TRUNC(activity_date) <= DATE '2019-07-27'
GROUP BY TRUNC(activity_date);

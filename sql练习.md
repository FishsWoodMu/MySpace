sql语句命令的练习
```sql
SELECT * FROM employee JOIN salay ON employee.id = salay.id;

SELECT user_name FROM employee where employee.id;

SELECT salay_number FROM salay where salay.id;

select * from employee join salay on salay.id = employee.id;

select user_name from employee join salay on salay.id = employee.id;

select * from salay where salay_number > 7000;

insert into testData.employee(user_name)
values ('joly');

insert into testData.salay(salay_number)
values (15978);

update testData.employee set user_name = 'Joe' WHERE id = 5;

UPDATE testData.salay
SET salay_number = salay_number + 100
WHERE salay_number = 8000;

select * from salay;

select * from employee;

```


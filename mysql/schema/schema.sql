use nodedb;

CREATE TABLE IF NOT EXISTS people
(
    id int not null auto_increment, 
    name varchar(255), primary key(id)
);

insert into people(name) values('Usuario 01');
insert into people(name) values('Usuario 02');
insert into people(name) values('Usuario 03');
insert into people(name) values('Usuario 04');
insert into people(name) values('Usuario 05');
insert into people(name) values('Usuario 06');
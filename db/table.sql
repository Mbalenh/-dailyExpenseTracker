CREATE TABLE users(
 id serial PRIMARY KEY,
  Firstname VARCHAR (50) UNIQUE NOT NULL,
Lastname VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 email VARCHAR (355) UNIQUE NOT NULL
);

create table categories(
    id serial PRIMARY KEY,
name text not null

    );

create table expenses(
id serial PRIMARY KEY,
user_id integer,
categories_id integer,
qty integer,
expenses_on date not null default current_date,
foreign key (categories_id) references categories(id),
foreign key (user_id) references users(id)
);











)


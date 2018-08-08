# Node and Sequelize Boiporlate with token auth using passport

## Installing packages.

To run correctly this project you must to install the following libraries with the commandas especified below.

- Install Postgres

- Install sequelize cli - ORM for MySql and Postgres

```
npm install -g sequelize-cli
```

- Install packages

```
npm install
```

## .ENV file

In the root of the project you have to create a new file called .env and complete following .env.example file, in this file you will config como enviorement variables like db connection.

## Creating the Database

Before start the project you have to create a postgres database with the name tha you especified as DB_NAME in .env file.

## Running migrations.

This projects had two tables, one for uses and one for roles, to generate these tables it is necessary to run the following command:

```
sequelize db:migrate
```

- To undo all migrations and clean the database

```
sequelize db:migrate:undo:all
```

## Running seeds.

As tables, there are tow seeds files to generage faker data, you can run them with the following command.

- User test@mail.com is migrated with password: "123"

```
sequelize db:seed:all
```

## Running the project

You can run the project and test the endpoints with Postman or similar:

```
  npm run dev
```

## Routes

### Register and user

. POST - http://localhost:3000/api/users

Request body

```
{
  "firstName": "Name",
  "lastName": "Last Name",
  "email":"Email",
  "password":"123",
  "role_id" : "1"
}
```

### Login an user

POST - http://localhost:3000/api/users/login

Request body

```
{
  "user":
  {
   "email":"test@mail.com",
   "password":"123"
  }
}
```

# graphql_prisma_react_postgresql
A mini signup/login project for implementing and getting used to technologies like GraphQL, Prisma in React connecting PostgreSQL.

## Live Video
1.) [YouTube Link](https://www.youtube.com/watch?v=sdqrSHhvU4o)
2.) [Live Heroku](https://intense-peak-63412.herokuapp.com/)
3.) Github Repos!
Now, we have two repositories here:
[Client](https://github.com/SiddharthChoudhary/SiddharthChoudhary.github.io-reactClient) & [Server](https://github.com/SiddharthChoudhary/graphql_prisma_react_postgresql)


## How to run this project?

Things which you need to beforehand:-
1.) Node & npm
2.) PostgreSQL/ install it through, homebrew or whatever you choose


## DB seeding

To fill the database, and seed them to the `mydb` database, which is already present in your DB, you would need to do this:-


a.) Run `seed.sh` like :- `$ ./seed.sh`
(`mydb` is the postgresql db which usually by default)
We have a .env file which has Database_URL='postgresql://....something'. So we need to plug that in our `Server` repository, so that we can run prisma commands to migrate `prisma.schema`.
`seed.sh` would run the prisma migration commands and populate your postgresql DB. So hold tight!


--- If DB populating is failing then you can try to run `node seed.js` in the `Server` folder which will create the DB and table.


## Steps to run locally
1.) `cd graphql_prisma_react_postgresql && npm i && npm start`
2.) `cd ../stagewood_app && npm i && npm start`
3.) `./seed.sh` , this command here runs your migration.sql from prisma folder.
4.) Let's assume that you successfully ran the above, and your server and client is running then you are good to go.

## Functionality
1.) We have `Route Authentication`, i.e., the dead or faulty urls will be redirected to the blank page.
2.) `Image upload` feature, which basically stores the image in the images folder at our web server
3.) We have `Form Validation`
4.) Responsive `Front End Design`
5.) `Password Encryption`
6.) `Redux/ or React Hooks`

## Personal Experience and Challenges
As I have had worked upon Graphql, React, Nodejs before it wasn't completely new but was a little difficult to get started. 

`Prisma` was pretty new to me, so it took some time. `GraphQL` also was challenging, as it is always :) 
Summarizing it, I know there are lot of open ends in this project but it was my 7-8 hrs of effort, so I am satisfied.
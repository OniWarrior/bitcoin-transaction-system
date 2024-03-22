# bitcoin-transaction-system
This is an application for our database project in our database class at University of Texas at Dallas

# App Description
 This application is meant to simulate a bitcoin purchasing application. There are two types of users,
client and trader. The client is a user that can directly purhase and/or sell bitcoin via USD fiat currency.
They can see their past orders and they can transfer money to a trader that maybe purchase bitcoin on their behalf.
The client can also see how much bitcoin they possess by accessing their bitcoin wallet via their user dashboard.
The trader may issue transactions for their clients, they can cancel payments and transactions made by their clients,
they may also search through payments and transactions that the trader cancelled via a cancel log, and they can
search for their clients via a search function in their user dashboard.

# Tech-Stack
--Front-End: For the front end, the React framework will be used to develop the UI. The state management 
system will be developed using React Redux.

--Back-End: For the back end, Express and Node.js will be used to develop the api that the front end will
utilize for api calls. The database that will be used is a Postgres database. 

--Deployment: At this moment, there isn't a final decision on deployment but there's a high potential that
heroku will be used for database and api deployment. For the front-end, deployment is most likely going to be vercel.
Will update this README when final decision is made.

# Note:
This repository represents the Front-End of this application.
The Back-End of this application will be in a different repository.


 
  

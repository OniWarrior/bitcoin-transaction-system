# bitcoin-transaction-system
This is an application for our database project in our database class at University of Texas at Dallas

# App Description
 This application is meant to simulate a bitcoin purchasing application. There are two types of users,
client and trader. The client is a user that can directly purchase and/or sell bitcoin via USD fiat currency.
They can see their past orders and they can transfer money to a trader that maybe purchase bitcoin on their behalf.
The client can also see how much bitcoin they possess by accessing their bitcoin wallet via their user dashboard.
The trader may issue transactions for their clients, they can cancel payments and transactions made by their clients,
they may also search through payments and transactions that the trader cancelled via a cancel log, and they can
search for their clients via a search function in their user dashboard.

# Tech-Stack
--Front-End: For the front end, the React framework was used to develop the UI. The state management system was developed using React Redux.

--Back-End: For the back end, Express and Node.js was used to develop the api that the front end will utilize for api calls. The database that will be used is a Postgres database. 

--Deployment: Heroku was used for deployment. For the front-end, it will be utilized by the Engineer's personal machines .


# Note:
This repository represents the Front-End of this application.
The Back-End of this application will be in a different repository.

# Install locally
To match the environment used by the Front-End Engineers, please ensure that 
VSCode is used as your personal IDE. Ensure that node.js is installed in your personal machine. If the user possesses a zip file of this repository, unzip and extract.Then open the repo in VSCode. Start the terminal inside VSCode and cd into bitcoin-transaction-system. Once inside this folder, while the command line is still open execute the command npm i. This will install all the dependencies that are located in the package.json file in the repo folder into your local machine allowing the app to spin up in your default browser.

# Team Members:
Stephen Aranda

Diego Cabanas

William Li	

David Payare


 
  

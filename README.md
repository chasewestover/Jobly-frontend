# Jobly

A full-stack application where users can search for and apply to jobs, built
with React on the frontend and Node/Express on the backend.

Users are able to sign up and login. Once logged in, users can view companies,
company detail pages, and all jobs. Users can apply to jobs they have not already
applied to. Lastly, users can edit their profile information. 

Authorization and authentication is handled using JSON Web Tokens (stored in
Local Storage). Some routes require admin authorization. 

You can view the deployed version
[here](http://jobly-react-cw.surge.sh/).

## Installation and Setup Instructions

### Server-side
1. Clone the [backend
   repository](https://github.com/chasewestover/Jobly-frontend)
2. `cd express-jobly`
3. `npm install`
4. `createdb jobly`
5. `createdb jobly-test`
6. `psql jobly < seed.py`
7. `npm start`

### Client-side
1. Clone the [frontend
   repository](https://github.com/chasewestover/Jobly-frontend)
2. `cd jobly-frontend`
2. `npm install`
3. `npm start`

## Technologies Used

* [React](https://reactjs.org/) - Javascript Frontend Framework
    * started using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) boilerplate
* [Node.js](https://nodejs.org/en/) - Javascript Backend Environment 
* [Express.js](http://expressjs.com/) - Javascript Backend Framework used to
  handle authorization/ authentication and routing
* [PostgreSQL Database](https://www.postgresql.org/) - SQL database management
  system for storing job, company, and user information. 
* [Node-Postgres](https://node-postgres.com/) - SQL driver to connect to
  database and execute SQL

## Authors

My partner for the frontend was [Marcus Zhu](https://github.com/m-zz). My partner for the backend was [Stephen Whelan](https://github.com/DataDeveloper7865).
# Jobly

A full-stack application where users can search for and apply to jobs, built
with React on the frontend and
Node/Express on the
backend. For ease of deployment, the backend and frontend repositories are
separate. You can access the backend repository [here](https://github.com/chasewestover/Jobly-backend).

App allows users to sign-up or login. Once logged in, users can view companies,
company detail pages (jobs posted for that company), and all jobs. Users can
also apply to jobs they haven't previously applied to. Lastly, users can edit
their profiles. 

Authorization and authentication is handled using JSON Web Tokens (stored in
Local Storage) and middleware. Users can only view certain routes, and some
routes require admin authorization. 

You can view the deployed version
[here](http://jobly-react-cw.surge.sh/).

## Installation and Setup Instructions

### Server-side
1. Clone this repository and the [backend
   repository](https://github.com/chasewestover/Jobly-backend). 
2. `cd express-jobly`
3. `npm install`
4. `createdb jobly`
5. `createdb jobly-test`
6. `psql jobly < seed.py`
7. `npm start`

### Client-side
1. `cd jobly-frontend`
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
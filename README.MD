# iCUY

## iCUY:

iCUY web-app is an open source application that allows user to manage his habits and track them:

1. Create your account
2. Add your motivational values for three main goals
3. Add habits in categories that depends on the values
4. Track whenever you can your own habits

## You need this:

1. Install node and npm (you can see more detail in this link https://nodejs.org/en/)

2. Install Mongodb module (you could use npm install -g mongodb in your command prompt)

3. Set in your Enviroment Variables the data base and Gooogle API credentials. 
This environment variable must be called:
```bash
MONGO_DB_NAME = "Database name"
MONGO_DB_URL = "The url of the database"
MONGO_DB_USER = "the Database user"
MONGO_DB_PASSWORD =  "The database password"
GOOGLE_CLIENT = "The google Client id"
GOOGLE_SECRET = "The google ID secret"
PASSPORT_SECRET = "The password secret for google"
```
It will create a database named: help-service.


## Demo

You could see the live demo in this following link: https://icuy.herokuapp.com/

## Technologies
The application runs an Express Server listening on port 3000. The data is on a NOSQL documental Databse: Mongo. There are Passport authentication and whole the user interface is made on React Library.

HTML, CSS, Javascript, MongoDB, Express Js, ReactJs, Passport, Apexcharts.

## Install

# Backend
```bash
cd iCUY
npm install
npm run start
```
# Front end
```bash
cd iCUY/front
npm install
npm run start
```

## Overview
 
![Overview](https://github.com/jmcontreras10/iCUY/blob/master/Capture.PNG?raw=true)

## Credits
Charts made with <a href="https://apexcharts.com/" title="Icon Pond">Apexcharts</a> from <a href="https://www.apexcharts.com/" title="Flaticon"> www.apexcharts.com</a>

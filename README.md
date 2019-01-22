# webAPP-Aurelia JS
Display contact names
This is the "get started" exercises from https://aurelia.io/home#building-the-application-shell a little bit customized.

Frontend with Aurelia JS.
Backend with Express from Node JS 
Database with MySQL

# Description
By default, you have a list of contact on the left side.
By clicking on the contact, a window display the contact details.

You can, create contact with a link in the top navbar,
clicking on the list,you access to the details's contact and you can modify it and save it before leaving,
to delete contacts, you can directly do it from the list or from the contact's details view.

# Steps
 Want to see it ?
 
 Clone this repository from Github.
 Run **npm install** in frontend & backend files.
 Create a file db.js in backend/helpers and fill it with:
 
    const mysql = require('mysql');

    const connection = mysql.createConnection({
      host: 'youhost',
      port: 'your port number',
      user: 'your username on phpmyadmin',
      password: 'your password on phpmyadmin',
      database: 'database name used in phpmyadmin'
    });
    module.exports = connection;

 Run **npm start** in frontend & backend files.
 
 Your web browser display this page on port 8080.

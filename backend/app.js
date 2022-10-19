// initialize Express application
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// isProduction will be true if env is in production
// by checking environment key in index.js file
const { environment } = require('./config');
const isProduction = environment === 'production';

// Initialize the Express application
const app = express();

// Connect the morgan middleware for logging
// information about requests and responses
app.use(morgan('dev'));

// Add cookie-parser middleware
// and express.json middleware
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);

// backend/app.js
const routes = require('./routes');

// ...

app.use(routes); // Connect all the routes

// backend/app.js
// ...

module.exports = app;
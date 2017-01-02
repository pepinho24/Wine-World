/* globals require console */
"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    lowdb = require("lowdb"),
    cors = require("cors"),
    db = lowdb("./data/data.json"),
    app = express();

db._.mixin(require("underscore-db"));

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static("assets/images"));

require("./utils/authorize-user")(app, db);

//User routes
let usersController = require("./controllers/users-controller")(db);
app.get("/api/users", usersController.get);
app.post("/api/users", usersController.post);
app.put("/api/auth", usersController.put);

// Articles routes
let articlesController = require("./controllers/articles-controller")(db);
app.get("/api/articles", articlesController.get);
app.post("/api/articles", articlesController.post);
app.put("/api/articles/:id", articlesController.put);
app.get("/api/articles/:id", articlesController.getById);

// Fortune cookies
let cookiesController = require("./controllers/cookies-controller")(db);
app.get("/api/cookies", cookiesController.get);
app.post("/api/cookies", cookiesController.post);
app.put("/api/cookies/:id", cookiesController.put);
//
// My fortune cookies
let myCookiesController = require("./controllers/my-cookies-controller")(db);
app.get("/api/my-cookie", myCookiesController.get);

// Categories
let categoriesController = require("./controllers/categories-controller")(db);
app.get("/api/categories", categoriesController.get);

const wineController = require('./controllers/wine')(db);
app.get('/api/wine', wineController.getAll);
app.get('/api/wine/:name', wineController.getOne);
app.get('/api/wine/select/:selector', wineController.getSelected);

let port = 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

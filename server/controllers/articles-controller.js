/* globals require module */
"use strict";

const _ = require("lodash");

module.exports = function (db) {
    function get(req, res) {
        let articles = _.chain(db("articles"))
            .sortBy(article => -article.CreatedOn);

        res.send({
            result: articles
        });
    }

    function getById(req, res) {

        let articleId = req.params.id;
        let article = db("articles").find({
            ArticleId: articleId
        });

        if (!article) {
            return res.status(404)
                .send("Invalid article ID");
        }

        res.send({
            result: article
        });
    }

    function post(req, res) {
        let article = req.body;
        if (!article.author) {
            return res.status(401)
                .send("User not authorized");
        }

        var dbArticle = {};
        dbArticle.Title = article.title;
        dbArticle.CreatedOn = new Date();
        dbArticle.Author = article.author.username;
        dbArticle.Content = article.content;

        db("articles").insert(dbArticle);
        dbArticle.ArticleId = dbArticle.id;

        return res.status(201)
        .send({
            result: dbArticle
        });
    }

    function put(req, res) {
        let user = req.user;

        if (!user) {
            return res.status(401)
                .send("User not authorized");
        }

        let articleId = req.params.id;
        let article = db("articles").find({
            ArticleId: articleId
        });

        if (!article) {
            return res.status(404)
                .send("Invalid article ID");
        }

        // let type = req.body.type;
        // if (["like", "dislike"].indexOf(type) < 0) {
        //     return res.status(400)
        //         .send("Request type must be either like or dislike");
        // }

        // if (req.body.type === "like") {
        //     cookie.likes += 1;
        // } else {
        //     cookie.dislikes += 1;
        // }

        db.save();

        return res.send({
            result: article
        });
    }

    return { get, getById, post, put };
};
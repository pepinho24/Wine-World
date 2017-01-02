'use strict';

const _ = require('lodash'),
    PUBLIC_FIELDS = ['name', 'type', 'year', 'origin', 'description', 'sweetness', 'abv', 'image', 'sold'],
    RETAIL_FIELDS = PUBLIC_FIELDS.concat['price.retail'],
    WHOLESALE_FIELDS = PUBLIC_FIELDS.concat['price.wholesale', 'wholesaleQuantity'];


// TODO: extract user-related functionality

const isRetail = (user) => {
        return user && user.level >= 10;
    },
    isWholesale = (user) => {
        return user && user.level >= 20;
    },
    isAdmin = (user) => {
        return user && user.level >= 30;
    };

module.exports = function(db) {

    function filterMultiResult(user, wine) {
        let map = (fields) => wine.map((w) => _.pick(w, fields)),
            result = [];

        if (isRetail(user)) {
           result = map(RETAIL_FIELDS);
        } else if (isWholesale(user)) {
            result = map(WHOLESALE_FIELDS);
        } else {
            result = map(PUBLIC_FIELDS);
        }

        return result;
    }

    function getAll(req, res) {
        let wine = db('wine'),
            result = filterMultiResult(req.user, wine);
        res.json({ result });
    }

    function getOne(req, res) {
        let wine = db('wine').find({name: req.params.name}) || {},
            result = {};

        if (isRetail(req.user)) {
           result = _.pick(wine, RETAIL_FIELDS);
        } else if (isWholesale(req.user)) {
            result = _.pick(wine, WHOLESALE_FIELDS);
        } else {
            result = _.pick(wine, PUBLIC_FIELDS);
        }

        res.json({ result });
    }

    function getSelected(req, res) {
        let wine = _.chain(db('wine')),
            selector = req.params.selector;

        if (selector === 'recommended') {
            wine = wine.filter({recommended: true});
        } else if (selector === 'top') {
            wine = wine.sortBy('sold');
        }
        wine = wine.take(3).value();
        const result = filterMultiResult(req.user, wine);
        res.json({ result });
    }

    return { getAll, getOne, getSelected };
};

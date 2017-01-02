'use strict';

const _ = require('lodash'),
    PUBLIC_FIELDS = ['name', 'type', 'year', 'origin', 'description', 'sweetness', 'abv', 'image'],
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
    function getAll(req, res) {
        let wine = db('wine'),
            map = (fields) => wine.map((w) => _.pick(w, fields)),
            result = [];

        if (isRetail(req.user)) {
           result = map(RETAIL_FIELDS);
        } else if (isWholesale(req.user)) {
            result = map(WHOLESALE_FIELDS);
        } else {
            result = map(PUBLIC_FIELDS);
        }

        res.json({result});
    }

    function getOne(req, res) {
        let wine = db('wine').find({name: req.params.name}) || {};

        if (isRetail(req.user)) {
           result = _.pick(wine, RETAIL_FIELDS);
        } else if (isWholesale(req.user)) {
            result = _.pick(wine, WHOLESALE_FIELDS);
        } else {
            result = _.pick(wine, PUBLIC_FIELDS);
        }

        res.json({ result });
    }

    return { getAll, getOne };
};

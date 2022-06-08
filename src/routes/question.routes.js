module.exports = app => {
    const question = require('../controllers/controllers');
    var router = require('express').Router();

    router.get('/', question.search);

    app.use('/api/search', router);
}
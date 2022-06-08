const db = require('../models');

const Question = db.Question

exports.search = (req, res) => {
    const query = req.query.q

    console.log(`From search ===>`, query)
    res.status(200).send({ message: 'Welcome to question server'})
}
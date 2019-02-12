const express = require('express')
const router = express.Router()
const User = require('../model/User')


router.get('/', (req, res) => {
    res.render('home')
})

router.post('/add', (req, res) => {
    let article = req.body;
    //res.send(article)
     User.create(article)
     .then((articles) => console.log(articles))
     .catch(error => console.log(error))
})

module.exports = router
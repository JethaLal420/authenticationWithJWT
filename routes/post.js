const router = require('express').Router()
const verifyToken = require('./verifyToken')

router.get('/', verifyToken, (req, res) => {
   res.json({ posts: { title: 'my 1st', desc: 'random data' } })
})

module.exports = router
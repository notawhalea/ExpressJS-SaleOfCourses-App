const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    // res.status(200);
    // res.sendFile(path.join(__dirname, 'views', 'index.hbs'))
    res.render('index', {
        title: 'Main',
        isMain: true
    })
})

module.exports = router
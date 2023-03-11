const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    // res.status(200);
    // res.sendFile(path.join(__dirname, 'views', 'about.hbs'))
    res.render('add', {
        title: 'Add course',
        isAdd: true
    })
})
module.exports = router
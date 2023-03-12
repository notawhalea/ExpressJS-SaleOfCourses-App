const express = require('express');
const exphbs = require('express-handlebars')
const mainRouter = require('./routes/main')
const coursesRouter = require('./routes/courses')
const cardRouter = require('./routes/card')
const addRouter = require('./routes/add')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//register in express our engine with follow name
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/', mainRouter)
app.use('/courses', coursesRouter)
app.use('/add', addRouter)
app.use('/card', cardRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Im working')
})
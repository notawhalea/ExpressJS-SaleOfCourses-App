const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//register in express our engine with follow name
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.status(200);
    // res.sendFile(path.join(__dirname, 'views', 'index.hbs'))
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.status(200);
    // res.sendFile(path.join(__dirname, 'views', 'about.hbs'))
    res.render('about')
})

app.listen(PORT, () => {
    console.log('Im working')
})
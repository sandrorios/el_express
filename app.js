const express = require('express'),
    handlebars = require('express-handlebars').create({
        defaultLayout: 'main'
    });

const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home')
})
app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(3000)

console.log("Server Started on PORT: 3000; Press Ctrl-C to terminate...");
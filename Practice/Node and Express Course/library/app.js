var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router(); //allows us to start building routes

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get(function(req, res, next){
        res.render('Books'),{
        title: 'Books',
        nav: [{
            Link:'/Books', 
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    }
    });

bookRouter.route('/single')
    .get(function(req, res, next){
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter) //Middleware that applies to all /Books routes, using bookRouter




app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{Link:'/Books', Text: 'Books'
    }, {
        Link: './Authors',
        Text: 'Authors'
    }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
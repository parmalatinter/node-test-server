const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const PORT           = process.env.PORT || 5000;
const app            = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({
        extended : true
    }))
    .use((req, res, next) => {
        try {
            bodyParser.json();
            next();
        } catch (e) {
            res.status(500).send(e.message);
        }
    })
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(methodOverride((req) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            const method = req.body._method;
            delete req.body._method;
            return method;
        }
    }))
    .use((req, res, next) => {
        if (!req.xhr && req.url === '/ajax') {
            res.redirect('/index');
        } else {
            next();
        }
    })
    .use('/', require('./app/routes/index'))
    .use('/ajax', require('./app/routes/ajax'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

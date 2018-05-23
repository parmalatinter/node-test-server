const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
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

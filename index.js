const express = require('express')
const RouteManager = require('./routes/RouteManager');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = new RouteManager(app);
routes.config();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index.html');
});

var port = 3000;
app.listen(port, function () {
    console.log('Server', process.pid, 'listening on port', port);
});

module.exports = app; 

const bodyParser = require("body-parser");
const express = require("express");
const app = new express();
const router = express.Router();
const index = router.get('/',(req,res,next)=>{
    res.status(200).render('index.ejs');
});

// Soluciona conflito de Cors entre node e angular no mesmo servidor
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);


app.set('view engine', 'ejs');
app.use(bodyParser.json());
//converter urls
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);

module.exports = app;
const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
var path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Databse is connected at 127.0.0.1:27017 and is live on localhose:3000
mongoose.connect("mongodb://127.0.0.1:27017/jarurat_care_data")
.catch(err => console.log(err));


app.get("/", function(req,res) {
  res.render("index");
});

app.use('/api/services', serviceRoutes);

app.listen(3000);
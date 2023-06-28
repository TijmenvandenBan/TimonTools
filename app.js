const express = require('express');
const path = require('path');
const mongoose = require ('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Tile = require('./models/tile');

mongoose.connect('mongodb://127.0.0.1:27017/timon-tools');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    const tiles = await Tile.find({});
    console.log("Homepage Connected");
    res.render("index", {tiles});
});

app.get('/about', (req, res) => {
    console.log("About page Connected");
    res.render("about/index");
});

app.get('/music', (req, res) => {
    console.log("Music page Connected");
    res.render("music/index");
});

app.listen(3000, () => {
    console.log('Connection on port: 3000')
});
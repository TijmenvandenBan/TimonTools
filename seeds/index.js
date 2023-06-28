const mongoose = require("mongoose");
const tiles = require("./tiles");
const Tile = require("../models/tile");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Tile.find({});
    for (let i = 0; i < 5; i++) {
        const tile = new Tile({
            title: tiles[i].title,
            description: tiles[i].description,
            category: tiles[i].category
        });
        await tile.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});
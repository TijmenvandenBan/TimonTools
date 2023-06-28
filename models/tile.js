const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TileSchema = new Schema ({
    title: String,
    description: String,
    category: String,
    rating: {
        likes: {type: Number, default: 0, min: 0},
        votes: {type: Number, default: 0, min: 0}
    }
});

module.exports = mongoose.model('Tile', TileSchema);
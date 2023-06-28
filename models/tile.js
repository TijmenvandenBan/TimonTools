const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tileSchema = new Schema ({
    document_ids: [],
    title: String,
    description: String,
    category: String,
    script: String,
    rating: {
        likes: Number,
        dislikes: Number,
        votes: Number,
    }
});

module.exports('Tile', tileSchema);
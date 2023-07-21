const mongoose = require ('mongoose');

const collectionName = 'songs';

const SongSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    artists: {
        type: [String],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    playCount: {
        type: Number,
        default: 0,
    }
});

const SongModel = mongoose.model (collectionName, SongSchema);

export default SongModel;

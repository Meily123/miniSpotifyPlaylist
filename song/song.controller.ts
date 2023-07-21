import express from 'express';
import songUsecase from './song.service';
import bodyParser from "body-parser";

const router = express.Router ();

const getPlaylist = router.get ('/song', async (req, res) => {
    try {
        const playlist = await songUsecase.getPlaylist ();
        res.status (200).json (playlist);
    } catch (error) {
        console.log (`ERROR : ${error}`);
        res.status (500).json ({error: 'Failed to get playlist'});
    }
});

const addSong = router.post ('/song' ,bodyParser.json(), async (req, res) => {
    try {
        const {title, artists, url} = req.body;
        console.log(req.body);
        const song = await songUsecase.addSong (title, artists, url);
        res.status (201).json (song);
    } catch (error) {
        console.log (`ERROR : ${error}`);
        res.status (500).json ({error: 'Failed to add song'});
    }
});

const getSongById = router.get ("/song/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const song = await songUsecase.getById (id);
        res.status (201).json (song);
    } catch (error) {
        console.log (`ERROR : ${error}`);
        res.status (500).json ({error: 'Failed to add song'});
    }
});

const SongController: express.Router[] = [
    getPlaylist,
    addSong,
    getSongById,
];

export default SongController
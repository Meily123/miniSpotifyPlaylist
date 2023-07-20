import express from 'express';
import SongController from './song/song.controller';

const routes: express.Router[] = [
    ...SongController,
]

export default routes;
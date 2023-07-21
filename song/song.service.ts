import songRepository from "./song.repository";
import {ObjectId} from "mongodb";
import {ISongBase} from "./song.interface";
import ERROR_CODE from '../shared/constants/error';

const addSong = async (title: string, artists: string[], url: string) => {
    const songData: ISongBase = {
        title,
        artists,
        url,
    };
    return songRepository.create (songData);
};

const getPlaylist = async () => {
    return songRepository.findAll ();
};

const getById = async (id: string) => {
    const idObject = new ObjectId(id);
    const checkSong = songRepository.getById (idObject);
    if (checkSong === null){
        throw new Error(ERROR_CODE.NOT_FOUND)
    }
    await songRepository.updateById(idObject);
    return songRepository.getById (idObject);
}

const SongService = {
    getPlaylist,
    addSong,
    getById,
};

export default SongService;

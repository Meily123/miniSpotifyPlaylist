import SongModel from "./song.model";
import {ObjectId} from 'mongodb';
import {ISongBase, ISongDB} from "./song.interface";

const create = async (
    payload: ISongBase
): Promise<ISongDB> => {
    return await SongModel.create (payload);
};

const findAll = async () => {
    return await SongModel.find().sort({playCount: -1});
};

const getById = async (
    id: ObjectId
) => {
    return await SongModel.findOne ({_id: id});
};

const updateById = async (
    id: ObjectId,
) => {
    return await SongModel.findOneAndUpdate (
        {
            _id: id,
        },
        {
            $inc: {
                playCount: 1
            }
        },
        {new: false}
    ).exec ();
};

const SongRepository = {
    create,
    findAll,
    getById,
    updateById
};

export default SongRepository;

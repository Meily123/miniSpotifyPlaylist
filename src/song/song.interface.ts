import {ObjectId} from "mongodb";

export interface ISongBase{
    title: string,
    artists: string[],
    url: string,
}

export interface ISongDB extends ISongBase{
    id: ObjectId,
    playCount: number,
}

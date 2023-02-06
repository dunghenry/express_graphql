import mongoose from 'mongoose';

export interface IBook {
    authorId: mongoose.Schema.Types.ObjectId;
    title: string;
    genre: string;
}
export interface IBookRecord extends IBook {
    _id: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

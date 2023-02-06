import mongoose from 'mongoose';

export interface IAuthor {
    name: string;
    age: number;
}
export interface IAuthorRecord extends IAuthor {
    _id: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

import { IAuthor } from './../interface/author.interface';
import { Schema, model } from 'mongoose';
const authorSchema = new Schema<IAuthor>(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Author = model<IAuthor>('Author', authorSchema);
export default Author;

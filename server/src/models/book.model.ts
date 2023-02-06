import { Schema, model } from 'mongoose';
import { IBook } from '../interface/book.inteface';

const bookSchema = new Schema<IBook>(
    {
        authorId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Book = model<IBook>('Book', bookSchema);
export default Book;

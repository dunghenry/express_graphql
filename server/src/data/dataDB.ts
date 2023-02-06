import mongoose from 'mongoose';
import Book from '../models/book.model';
import Author from '../models/author.model';
import { IAuthor } from '../interface/author.interface';
import { IBook } from '../interface/book.inteface';
type Id = mongoose.Schema.Types.ObjectId;
const mongoDataMethods = {
    createAuthor: async (author: IAuthor) => {
        const newUser = new Author(author);
        return await newUser.save();
    },
    createBook: async (book: IBook) => {
        const newBook = new Book(book);
        return await newBook.save();
    },
    getAuthors: async () => await Author.find({}),
    getBooks: async () => await Book.find({}),
    getBookById: async (id: Id) => await Book.findById(id),
    getAuthorById: async (id: Id) => await Author.findById(id),
    getAuthorAndBook: async (authorId: Id) => await Author.findById({ _id: authorId }),
    getBooksAndAuthor: async (authorId: Id) => await Book.find({ authorId }),
};

export default mongoDataMethods;

export interface IContext {
    mongoDataMethods: typeof mongoDataMethods;
}

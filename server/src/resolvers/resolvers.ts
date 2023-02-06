import { IAuthor, IAuthorRecord } from './../interface/author.interface';
import { IBook, IBookRecord } from './../interface/book.inteface';
import { IContext } from './../data/dataDB';
import { authors } from './../data/data';
import { books } from '../data/data';
import mongoose from 'mongoose';
const resolvers = {
    Query: {
        // books: () => books,
        books: async (_: any, __: any, contextValue: IContext) =>
            await contextValue.mongoDataMethods.getBooks(),
        book: async (
            _: any,
            args: { id: mongoose.Schema.Types.ObjectId },
            contextValue: IContext,
        ) => {
            //console.log(args);// {id: "bookId",}
            // const book = books.find((book) => book.id === +args.id);
            // return book;
            return await contextValue.mongoDataMethods.getBookById(args.id);
        },
        author: async (
            _: any,
            args: { id: mongoose.Schema.Types.ObjectId },
            contextValue: IContext,
        ) => {
            //console.log(args);// {id: "authorId",}
            // const author = authors.find((author) => author.id === +args.id);
            // return author;
            return await contextValue.mongoDataMethods.getAuthorById(args.id);
        },
        // authors: () => authors,
        authors: async (_: any, __: any, contextValue: IContext) =>
            await contextValue.mongoDataMethods.getAuthors(),
    },
    Book: {
        author: async (parent: IBookRecord, __: any, contextValue: IContext) => {
            // console.log(args); {}
            //console.log('17 - Book: ', parent); // Book
            // return authors.find((author) => author.id == parent.authorId);
            return await contextValue.mongoDataMethods.getAuthorAndBook(parent.authorId);
        },
    },
    Author: {
        books: async (parent: IAuthorRecord, args: any, contextValue: IContext) => {
            // console.log(args);
            // console.log('25 - Author: ', parent); // Author
            // return books.filter((book) => book.authorId === parent.id);
            return await contextValue.mongoDataMethods.getBooksAndAuthor(parent._id);
        },
    },
    Mutation: {
        createAuthor: async (_: any, args: IAuthor, contextValue: IContext) => {
            // const id = Math.floor(Math.random() * 100) + 10;
            // authors.push({ ...args, id: id });
            // return {
            //     ...args,
            //     id: id,
            // };
            return await contextValue.mongoDataMethods.createAuthor(args);
        },
        createBook: async (_: any, args: IBook, contextValue: IContext) => {
            // const id = Math.floor(Math.random() * 100) + 10;
            // books.push({ ...args, id: id });
            // return {
            //     ...args,
            //     id: id,
            // };

            return await contextValue.mongoDataMethods.createBook(args);
        },
    },
};

export default resolvers;

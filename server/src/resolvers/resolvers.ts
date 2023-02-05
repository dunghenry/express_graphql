import { authors } from './../data/data';
import { books } from '../data/data';
const resolvers = {
    Query: {
        books: async () => books,
        book: async (_: any, args: any, {}) => {
            //console.log(args);// {id: "bookId",}
            const book = books.find((book) => book.id === +args.id);
            // console.log(book);
            return book;
        },
        author: async (_: any, args: any, {}) => {
            //console.log(args);// {id: "authorId",}
            const author = authors.find((author) => author.id === +args.id);
            return author;
        },
        authors: async () => authors,
    },
    Book: {
        author: (parent: any, args: any) => {
            // console.log(args); {}
            //console.log('17 - Book: ', parent); // Book
            return authors.find((author) => author.id == parent.authorId);
        },
    },
    Author: {
        books: (parent: any, args: any) => {
            // console.log(args);
            // console.log('25 - Author: ', parent); // Author
            return books.filter((book) => book.authorId == parent.id);
        },
    },
    Mutation: {
        createAuthor: async (_: any, args: any, {}) => {
            const id = Math.floor(Math.random() * 100) + 10;
            authors.push({ ...args, id: id });
            return {
                ...args,
                id: id,
            };
        },
        createBook: async (_: any, args: any, {}) => {
            const id = Math.floor(Math.random() * 100) + 10;
            books.push({ ...args, id: id });
            return {
                ...args,
                id: id,
            };
        },
    },
};

export default resolvers;

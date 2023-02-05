import { IPort } from './../types/index.d';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import helmet from 'helmet';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers';
const port: IPort = Number(process.env.PORT!) || 4000;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
app.get<{}, { message: string }, {}, {}>('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Apollo Server',
    });
});
(async () => {
    await server.start();
    app.use(expressMiddleware(server));
    await new Promise((resolve: any) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000`);
})();

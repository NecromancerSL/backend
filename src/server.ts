import express from 'express';
import dotenv from 'dotenv';
import mainRoutes  from './routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(bodyParser.json())
server.use(cors());

server.use(mainRoutes);

server.listen(process.env.PORT);
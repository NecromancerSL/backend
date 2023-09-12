import express from 'express';
import dotenv from 'dotenv';
import mainRoutes  from './routes/index';
//import sequelize from 'sequelize';


dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);
server.listen(process.env.PORT);
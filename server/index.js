import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './route/route.js';
import Connection from './database/db.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on  ${PORT}`));


const username = process.env.DBUSERNAME;
const password = process.env.DBPASS;
const projectName = process.env.DBPROJECTNAME;

Connection(username, password, projectName);

// Connection();
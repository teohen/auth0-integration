import express from 'express';
import cors from 'cors';

import routes from './routes.js'

import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Hero app running on port ${port}`)
});
import express, { json } from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const PORT = process.env.PORT || 4444;

const app = express();

app.use(json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server listening on ${PORT} port`));

export {app}
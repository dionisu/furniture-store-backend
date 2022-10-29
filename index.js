import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server listening on ${PORT} port`));

app.get("/", (req, res) => {
    res.send("HALO");
});
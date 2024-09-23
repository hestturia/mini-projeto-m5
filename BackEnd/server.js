import express from "express"
import {movieRouter} from './src/routes/movie.routes.js';

const app = express();

app.use(express.json());

app.use(movieRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});


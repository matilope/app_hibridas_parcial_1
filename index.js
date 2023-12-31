import express from 'express';
import cors from 'cors';
import GamesRoutes from './routes/games.js';
import JudgesRoutes from './routes/judges.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(GamesRoutes);
app.use(JudgesRoutes);

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando el puerto ${PORT}`);
});
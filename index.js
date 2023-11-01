import express from 'express';
import GamesRoutes from './routes/games.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(GamesRoutes);

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando el puerto ${PORT}`);
});
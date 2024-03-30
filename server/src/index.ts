import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.development.local' });

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

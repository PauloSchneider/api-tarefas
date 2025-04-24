import express from 'express';
import AppDataSource from './database/data-source';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
  });
  
  return app.listen(process.env.PORT, () => {
    console.log(`✔ Server started on port ${process.env.PORT}!`);
  });
})
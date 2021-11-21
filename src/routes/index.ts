import express from 'express';
import path from 'path';
import pokemonRoute from './pokemon';
import typeRoute from './type';
import mongoose from 'mongoose';
import { RequestModel } from '../models/RequestModel';

const router = express.Router();

const mongoConnectionUrl = 'mongodb://localhost:27017/pokeapidb';

const connectWithRetry = () => {
  mongoose
    .connect(mongoConnectionUrl)
    .then(() => {
      console.log('Were connected to MongoDb');
    })
    .catch((err) => {
      console.log('Error connecting to Mongo', err);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

router.get('/', function (req: any, res: any) {
  const newRequest = new RequestModel({
    name: req.path,
    date: new Date(),
    ip: req.ip
  });

  newRequest.save((error: any, createdRequest: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Saved');
    }
  });

  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.use('/api/v2/pokemon', pokemonRoute);
router.use('/api/v2/type', typeRoute);

export default router;

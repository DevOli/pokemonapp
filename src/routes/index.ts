import express from 'express';
import path from 'path';
import pokemonRoute from './pokemon';
import typeRoute from './type';
import RequestRepo from '../repositories/RequestsRepo';

const requestRepo = new RequestRepo();

const router = express.Router();

router.get('/', function (req: any, res: any) {
  requestRepo
    .create(req.originalUrl, req.ip)
    .then((request) => console.log('Saved in DB:', request))
    .catch((err) => console.log(err));
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.use('/api/v2/pokemon', pokemonRoute);
router.use('/api/v2/type', typeRoute);

export default router;

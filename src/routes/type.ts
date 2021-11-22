import PokemonTypeController from '../controllers/PokemonTypeController';
import RequestRepo from '../repositories/RequestsRepo';
import express from 'express';
const router = express.Router();
const requestRepo = new RequestRepo();
// middleware that is specific to this router
router.use(function timeLog(req: any, res: any, next: any) {
  requestRepo
    .create(req.originalUrl, req.ip)
    .then((request) => console.log('Saved in DB:', request))
    .catch((err) => console.log(err));
  next();
});
// all types
router.get('/', async function (req: any, res: any) {
  try {
    const types = await PokemonTypeController.showAllPokemonTypes();
    res.send({ count: types.length, results: types });
  } catch (error) {
    res.status(404).send('Oops something went wrong!');
  }
});
// specific type
router.get('/:type', async function (req: any, res: any) {
  try {
    const type: string = req.params.type;
    const typeRes = await PokemonTypeController.showPokemonType(type);
    res.send(typeRes);
  } catch (error) {
    res.status(404).send('Oops something went wrong!');
  }
});

export default router;

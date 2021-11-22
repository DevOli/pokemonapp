import PokemonController from '../controllers/PokemonController';
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
// all pokemons
router.get('/', async function (req: any, res: any) {
  try {
    const pokemons = await PokemonController.showAllPokemon();
    res.send({ count: pokemons.length, results: pokemons });
  } catch (error) {
    res.status(404).send('Oops something went wrong!');
  }
});
// specific pokemon
router.get('/:pokemon', async function (req: any, res: any) {
  try {
    const pokemon: string = req.params.pokemon;
    const pokemonResult = await PokemonController.showPokemon(pokemon);
    res.send(pokemonResult);
  } catch (error) {
    res.status(404).send('Oops something went wrong!');
  }
});

export = router;

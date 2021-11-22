import PokemonController from '../controllers/PokemonController';
import { RequestModel } from '../models/RequestModel';

import express from 'express';
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req: any, res: any, next: any) {
  console.log('Time: ', Date.now());
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

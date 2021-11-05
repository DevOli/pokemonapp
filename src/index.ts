import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
import PokemonTypeController from './controllers/PokemonTypeController';
PokemonTypeController.showAllPokemonTypes();
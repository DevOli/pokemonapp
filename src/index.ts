import PokemonTypeController from './controllers/PokemonTypeController';

//PokemonTypeController.showAllPokemonTypes();

//Get console arguments
var type = process.argv.slice(2);
console.log('You selected type: ', type[0]);
PokemonTypeController.showPokemonType(type[0]);
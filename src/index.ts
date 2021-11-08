import PokemonTypeController from './controllers/PokemonTypeController';
import PokemonController from './controllers/PokemonController';
import PokemonTypeApi from './api/PokemonApi';

//PokemonTypeController.showAllPokemonTypes();
//PokemonController.showAllPokemon();

//Get console arguments
var type = process.argv.slice(2);
console.log('You selected type: ', type[0]);

PokemonTypeController.showPokemonType(type[0])
    .then(pokemonName =>{
        PokemonController.showPokemon(pokemonName);
    })
    .catch(err => console.log(err))

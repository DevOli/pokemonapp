import express from 'express';
import indexRoute from './routes/index';
const app = express();
const port = 8080;

app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Pokedex App listening at http://localhost:${port}`);
});

//Console APP
// var type = process.argv.slice(2);
// console.log('You selected type: ', type[0]);

// PokemonTypeController.showPokemonType(type[0])
//     .then(pokemonName =>{
//         PokemonController.showPokemon(pokemonName);
//     })
//     .catch(err => console.log(err))

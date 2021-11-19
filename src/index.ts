import path from 'path';
import express from 'express';
const app = express();
const port = 8080;

import pokemonRoute from './routes/pokemon';
import typeRoute from './routes/type';

app.get('/', function (req: any, res: any) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use('/api/v2/pokemon', pokemonRoute);
app.use('/api/v2/type', typeRoute);

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

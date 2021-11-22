import express from 'express';
import indexRoute from './routes/index';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const port = process.env.PORT || 8080;
const dbHost = process.env.HOST || 'localhost';
const dbPort = process.env.DATABASE_PORT || 27017;
const dbUser = process.env.DATABASE_USERNAME || '';
const dbPass = process.env.DATABASE_PASSWORD || '';
const database = process.env.DATABASE || 'pokeapidb';

const mongoConnectionUrl = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${database}`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoConnectionUrl)
    .then(() => {
      console.log(`<<<<< Were connected to MongoDb with ${mongoConnectionUrl} >>>>>>>>>>`);
    })
    .catch((err) => {
      console.log(`<<<<< Error connecting to Mongo with ${mongoConnectionUrl} >>>>>`);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

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

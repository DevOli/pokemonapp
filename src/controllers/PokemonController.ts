import PokemonApi from '../api/PokemonApi';
import Pokemon from '../interfaces/Pokemon';
import PokemonType from '../interfaces/PokemonType';
import PokemonModel from '../models/PokemonModel';

export default class PokemonController {

  static async showAllPokemon () : Promise<PokemonModel[]> {
    try {
      const pokemonTypes = await PokemonApi.getAll<PokemonModel, Pokemon>("pokemon", PokemonModel);
      pokemonTypes.forEach(p => {
        console.log(`${p}`);
      });
      return pokemonTypes
    } catch (ex: any) {
      console.log(ex.message);
      throw new Error('Something wrong happened in showAllPokemon');
    }
  }

  static async showPokemon(name: string) : Promise<PokemonModel> {
    try {
      const pokemon = await PokemonApi.getOne<PokemonModel, Pokemon>("pokemon", name, PokemonModel)
      console.log(`${pokemon}`)
      return pokemon     
    } catch (ex: any) {
      console.error(ex);
      throw new Error('Something wrong happened in showPokemon');
    }         
  }
    
  // static async showAllPokemon () : Promise<void> {
  //   try {
  //     const pokemonTypes = await PokemonApi.getAllPokemons();
  //     pokemonTypes.forEach(p => {
  //       console.log(`${p}`);
  //     });
  //   } catch (ex: any) {
  //     console.log(ex.message);
  //   }
  // }

  // static showPokemon(name: string){      
  //   PokemonApi.getPokemon(name)
  //     .then((pokemonType) => console.log(`${pokemonType}`))
  //     .catch(error => console.error(error));
  // }
}
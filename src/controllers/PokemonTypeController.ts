import PokemonTypeApi from '../api/PokemonApi';

export default class PokemonTypeController {

  static async showAllPokemonTypes () : Promise<void> {
    try {
      const pokemonTypes = await PokemonTypeApi.getAllPokemonTypes();
      pokemonTypes.forEach(pt => {
        console.log(`${pt}`);
      });
    } catch (ex: any) {
      console.log(ex.message);
    }
  }

  static async showPokemonType(type: string) : Promise<string> {
    try {
      const pokemonType = await PokemonTypeApi.getPokemonType(type);
      console.log(`${pokemonType}`);
      return pokemonType.getRandomPokemonName();
    } catch (ex: any) {    
      console.log(ex.message);
      throw new Error('Something wrong happened in getPokemonType');
    }
  }
  
}
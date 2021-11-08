import PokemonTypeApi from '../api/PokemonTypeApi';

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

  static async showPokemonType(type: string) : Promise<void> {
    try {
      const pokemonType = await PokemonTypeApi.getPokemonType(type);
      console.log(`${pokemonType}`)
    } catch (ex: any) {
      console.log(ex.message);
    }
  }

  static showPokemonTypeSync(type: string){      
    PokemonTypeApi.getPokemonType(type)
      .then((pokemonType) => console.log(`${pokemonType}`))
      .catch(error => console.error(error));
  }
}
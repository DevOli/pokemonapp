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
}
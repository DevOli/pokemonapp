import PokemonTypeApi from '../api/PokemonApi';

export default class PokemonController {

  static async showAllPokemon () : Promise<void> {
    try {
      const pokemonTypes = await PokemonTypeApi.getAllPokemons();
      pokemonTypes.forEach(pt => {
        console.log(`${pt}`);
      });
    } catch (ex: any) {
      console.log(ex.message);
    }
  }

  static showPokemon(name: string){      
    PokemonTypeApi.getPokemon(name)
      .then((pokemonType) => console.log(`${pokemonType}`))
      .catch(error => console.error(error));
  }
}
import PokemonApi from '../api/PokemonApi';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonType } from '../interfaces/PokemonType';
import PokemonModel from '../models/PokemonModel';
import PokemonTypeModel from '../models/PokemonTypeModel';

export default class PokemonTypeController {
  static async showAllPokemonTypes(): Promise<PokemonTypeModel[]> {
    try {
      const pokemonTypes = await PokemonApi.getAll<PokemonTypeModel, PokemonType>(
        'type',
        PokemonTypeModel
      );
      // pokemonTypes.forEach(pt => {
      //   console.log(`${pt}`);
      // });
      return pokemonTypes;
    } catch (ex: any) {
      console.log(ex.message);
      throw new Error('Something wrong happened in showAllPokemonTypes');
    }
  }

  static async showPokemonType(type: string): Promise<PokemonTypeModel> {
    try {
      const pokemonType = await PokemonApi.getOne<PokemonTypeModel, PokemonType>(
        'type',
        type,
        PokemonTypeModel
      );
      console.log(`${pokemonType}`);
      //return pokemonType.getRandomPokemonName();
      return pokemonType;
    } catch (ex: any) {
      console.log(ex.message);
      throw new Error('Something wrong happened in getPokemonType');
    }
  }

  // static async showAllPokemonTypes () : Promise<void> {
  //   try {
  //     const pokemonTypes = await PokemonTypeApi.getAllPokemonTypes();
  //     pokemonTypes.forEach(pt => {
  //       console.log(`${pt}`);
  //     });
  //   } catch (ex: any) {
  //     console.log(ex.message);
  //   }
  // }

  // static async showPokemonType(type: string) : Promise<string> {
  //   try {
  //     const pokemonType = await PokemonApi.getPokemonType(type);
  //     console.log(`${pokemonType}`);
  //     return pokemonType.getRandomPokemonName();
  //   } catch (ex: any) {
  //     console.log(ex.message);
  //     throw new Error('Something wrong happened in getPokemonType');
  //   }
  // }
}

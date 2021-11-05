import axios from 'axios';
import PokemonType from '../interfaces/PokemonType';
import PokemonTypeBase from '../interfaces/PokemonTypeBase';
import PokemonTypeModel from '../models/PokemonTypeModel';

export default class PokemonTypeApi {
  static async getAllPokemonTypes(): Promise<PokemonTypeModel[]> {
    try {
      const response = await axios.get('/type');
      const pokemonTypesBase: PokemonTypeBase[] = response.data.results;
      const pokemonTypes = Promise.all<PokemonTypeModel>(pokemonTypesBase.map(async(ptb: PokemonTypeBase) => {
        const pt = await this.getPokemonTypeFromUrl(ptb.url);
        return new PokemonTypeModel(pt);
      }));

      return pokemonTypes;
    } catch(ex) {
      throw new Error('Something wrong happened.');
    }
  }

  static async getPokemonTypeFromUrl(url: string) : Promise<PokemonType> {
    const response = await axios.get(url);

    return response.data;
  }
}
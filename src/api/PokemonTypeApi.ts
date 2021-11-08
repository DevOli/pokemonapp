import axios from 'axios';
import PokemonType from '../interfaces/PokemonType';
import PokemonTypeBase from '../interfaces/PokemonTypeBase';
import PokemonTypeModel from '../models/PokemonTypeModel';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

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
      throw new Error('Something wrong happened in getAllPokemonTypes');
    }
  }

  static async getPokemonType(type: string): Promise<PokemonTypeModel> {
    try {
      const response = await axios.get(`/type/${type}/`);
      const pokemonType: PokemonType = response.data;
      const pokemonTypeModel = new PokemonTypeModel(pokemonType);

      return pokemonTypeModel;
    } catch(ex) {
      throw new Error('Something wrong happened in getPokemonType');
    }
  }

  private static async getPokemonTypeFromUrl(url: string) : Promise<PokemonType> {
    try {
      const response = await axios.get(url);
      return response.data;    
    } catch (error) {
      throw new Error('Api call failed')
    }
  }

}
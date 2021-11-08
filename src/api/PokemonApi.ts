import axios from 'axios';
import PokemonType from '../interfaces/PokemonType';
import Pokemon from '../interfaces/Pokemon';
import Resource from '../interfaces/Resource';
import PokemonModel from '../models/PokemonModel';
import PokemonTypeModel from '../models/PokemonTypeModel';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export default class PokemonTypeApi {

  static async getAllPokemonTypes(): Promise<PokemonTypeModel[]> {
    try {
      const response = await axios.get('/type');
      const pokemonTypesBase: Resource[] = response.data.results;
      const pokemonTypes = Promise.all<PokemonTypeModel>(pokemonTypesBase.map(async(ptb: Resource) => {
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

  static async getAllPokemons(): Promise<PokemonModel[]> {
    try {
      const response = await axios.get('/pokemon');
      const pokemonsBase: Resource[] = response.data.results;
      const pokemonTypes = Promise.all<PokemonModel>(pokemonsBase.map(async(ptb: Resource) => {
        const pt = await this.getPokemonFromUrl(ptb.url);
        return new PokemonModel(pt);
      }));

      return pokemonTypes;
    } catch(ex) {
      throw new Error('Something wrong happened in getAllPokemons');
    }
  }

  static async getPokemon(name: String): Promise<PokemonModel> {
    try {
      const response = await axios.get(`/pokemon/${name}/`);
      const pokemon: Pokemon = response.data;
      const pokemonModel = new PokemonModel(pokemon);

      return pokemonModel;
    } catch(ex) {
      throw new Error('Something wrong happened in getPokemon');
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

  private static async getPokemonFromUrl(url: string) : Promise<Pokemon> {
    try {
      const response = await axios.get(url);
      return response.data;    
    } catch (error) {
      throw new Error('Api call failed')
    }
  }

}
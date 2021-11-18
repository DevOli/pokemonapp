import axios from 'axios';
import { PokemonType } from '../interfaces/PokemonType';
import { Pokemon } from '../interfaces/Pokemon';
import { Resource } from '../interfaces/Resource';
import PokemonModel from '../models/PokemonModel';
import PokemonTypeModel from '../models/PokemonTypeModel';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export default class PokemonApi {
  static async getAll<Model, Interface>(
    resourceName: string,
    constr: { new (inter: Interface): Model }
  ): Promise<Model[]> {
    try {
      const response = await axios.get(`/${resourceName}`);
      const resources: Resource[] = response.data.results;
      const model = Promise.all<Model>(
        resources.map(async (res: Resource) => {
          const inter = await this.getResourceFromUrl<Interface>(res.url);
          return new constr(inter);
        })
      );

      return model;
    } catch (ex) {
      throw new Error('Something wrong happened in getAll');
    }
  }

  static async getOne<Model, Interface>(
    resourceName: string,
    name: string,
    constr: new (inter: Interface) => Model
  ): Promise<Model> {
    try {
      const response = await axios.get(`/${resourceName}/${name}/`);
      const inter: Interface = response.data;
      const model = new constr(inter);

      return model;
    } catch (ex) {
      throw new Error('Something wrong happened in getOne');
    }
  }

  private static async getResourceFromUrl<Interface>(url: string): Promise<Interface> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Api call failed');
    }
  }

  static async getAllPokemonTypes(): Promise<PokemonTypeModel[]> {
    try {
      const response = await axios.get('/type');
      const pokemonTypesBase: Resource[] = response.data.results;
      const pokemonTypes = Promise.all<PokemonTypeModel>(
        pokemonTypesBase.map(async (ptb: Resource) => {
          const pt = await this.getResourceFromUrl<PokemonType>(ptb.url);
          return new PokemonTypeModel(pt);
        })
      );

      return pokemonTypes;
    } catch (ex) {
      throw new Error('Something wrong happened in getAllPokemonTypes');
    }
  }

  static async getPokemonType(type: string): Promise<PokemonTypeModel> {
    try {
      const response = await axios.get(`/type/${type}/`);
      const pokemonType: PokemonType = response.data;
      const pokemonTypeModel = new PokemonTypeModel(pokemonType);

      return pokemonTypeModel;
    } catch (ex) {
      throw new Error('Something wrong happened in getPokemonType');
    }
  }

  static async getAllPokemons(): Promise<PokemonModel[]> {
    try {
      const response = await axios.get('/pokemon');
      const pokemonsBase: Resource[] = response.data.results;
      const pokemonTypes = Promise.all<PokemonModel>(
        pokemonsBase.map(async (ptb: Resource) => {
          const pt = await this.getResourceFromUrl<Pokemon>(ptb.url);
          return new PokemonModel(pt);
        })
      );

      return pokemonTypes;
    } catch (ex) {
      throw new Error('Something wrong happened in getAllPokemons');
    }
  }

  static async getPokemon(name: string): Promise<PokemonModel> {
    try {
      const response = await axios.get(`/pokemon/${name}/`);
      const pokemon: Pokemon = response.data;
      const pokemonModel = new PokemonModel(pokemon);

      return pokemonModel;
    } catch (ex) {
      throw new Error('Something wrong happened in getPokemon');
    }
  }
}

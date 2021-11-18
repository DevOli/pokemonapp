import { expect } from 'chai';
import PokemonModel from '../../src/models/PokemonModel';
import { Pokemon } from '../../src//interfaces/Pokemon';

describe('PokemonModel', () => {
  it('Sets the initial state and correct JSON return', () => {
    const pokemonInterface: Pokemon = {
      abilities: [
        {
          ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
          is_hidden: false,
          slot: 1
        },
        {
          ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
          is_hidden: true,
          slot: 3
        }
      ],
      base_experience: 64,
      forms: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }],
      game_indices: [],
      height: 7,
      held_items: [],
      id: 1,
      is_default: true,
      location_area_encounters: '',
      moves: [],
      name: 'bulbasaur',
      order: 1,
      past_types: [],
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
      },
      sprites: undefined,
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/'
          }
        }
      ],
      types: [],
      weight: 69
    };

    const instance = new PokemonModel(pokemonInterface);

    expect(JSON.stringify(instance)).to.equal(
      '{"Name":"bulbasaur","Id":1,"BaseExperience":64,"Height":7,"Weight":69,"Specie":"bulbasaur","Abilities":["overgrow","chlorophyll"],"Forms":["bulbasaur"],"Stats":[["hp",45]]}'
    );
  });
});

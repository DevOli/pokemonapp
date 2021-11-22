import { expect } from 'chai';
import PokemonTypeModel from '../../src/models/PokemonTypeModel';
import { PokemonType } from '../../src//interfaces/PokemonType';

describe('PokemonTypeModel', () => {
  const pokemonTypeInterface: PokemonType = {
    damage_relations: {
      double_damage_from: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/'
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/'
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/'
        }
      ],
      double_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/'
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/'
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/'
        }
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/'
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/'
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/'
        }
      ],
      half_damage_to: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/'
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/'
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/'
        }
      ],
      no_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/'
        }
      ],
      no_damage_to: []
    },
    game_indices: [
      {
        game_index: 2,
        generation: {
          name: 'generation-i',
          url: 'https://pokeapi.co/api/v2/generation/1/'
        }
      }
    ],
    generation: {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/'
    },
    id: 3,
    move_damage_class: {
      name: 'physical',
      url: 'https://pokeapi.co/api/v2/move-damage-class/2/'
    },
    moves: [
      {
        name: 'gust',
        url: 'https://pokeapi.co/api/v2/move/16/'
      }
    ],
    name: 'flying',
    names: [],
    past_damage_relations: [],
    pokemon: [
      {
        pokemon: {
          name: 'charizard',
          url: 'https://pokeapi.co/api/v2/pokemon/6/'
        },
        slot: 2
      },
      {
        pokemon: {
          name: 'butterfree',
          url: 'https://pokeapi.co/api/v2/pokemon/12/'
        },
        slot: 2
      }
    ]
  };

  it('Sets the initial state and correct JSON return', () => {
    const instance = new PokemonTypeModel(pokemonTypeInterface);

    expect(JSON.stringify(instance)).to.equal(
      '{"Name":"flying","Id":3,"Moves":["gust"],"Generation":"generation-i","DoubleDamageFrom":["rock","electric","ice"],"DoubleDamageTo":["fighting","bug","grass"],"Pokemon":["charizard","butterfree"]}'
    );
  });

  it('Gets a random pokemon from its self', () => {
    const instance = new PokemonTypeModel(pokemonTypeInterface);

    const pokemon = instance.getRandomPokemonName();

    expect(pokemon).to.satisfy((p: string) => {
      return p === 'charizard' || p === 'butterfree';
    });
  });
});

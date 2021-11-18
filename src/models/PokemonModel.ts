import { Pokemon } from '../interfaces/Pokemon';

export default class PokemonModel {
  private Name: string;
  private Id: number;
  private BaseExperience: number;
  private Height: number;
  private Weight: number;
  private Specie: string;
  private Abilities: string[];
  private Forms: string[];
  private Stats: [string, number][];

  constructor(pokemon: Pokemon) {
    this.Name = pokemon.name;
    this.Id = pokemon.id;
    this.BaseExperience = pokemon.base_experience;
    this.Height = pokemon.height;
    this.Weight = pokemon.weight;
    this.Specie = pokemon.species.name;
    this.Abilities = pokemon.abilities.map((a) => a.ability.name);
    this.Forms = pokemon.forms.map((f) => f.name);
    this.Stats = pokemon.stats.map((s) => [s.stat.name, s.base_stat]);
  }

  toString(): string {
    return (
      `--------------------------------------` +
      `\nA pokemon of this type is ${this.Name.toUpperCase()}` +
      `\nwith base experience of ${this.BaseExperience}` +
      `\nheight: ${this.Height}` +
      `\nweight: ${this.Weight}` +
      `\nspecie: ${this.Specie}` +
      `\nList of abilities::` +
      `\n - ` +
      this.Abilities.join('\n - ') +
      `\nList of forms::` +
      `\n - ` +
      this.Forms.join('\n - ') +
      `\nList of Stats::` +
      `\n - ` +
      this.Stats.join('\n - ')
    );
  }
}

import { PokemonType } from '../interfaces/PokemonType';

export default class PokemonTypeModel {
  private Name: string;
  private Id: number;
  private Moves: string[];
  private Generation: string;
  private DoubleDamageTo: string[];
  private DoubleDamageFrom: string[];
  private Pokemon: string[];

  constructor(pokemonType: PokemonType) {
    this.Name = pokemonType.name;
    this.Id = pokemonType.id;
    this.Moves = pokemonType.moves.map((m) => m.name);
    this.Generation = pokemonType.generation.name;
    this.DoubleDamageFrom = pokemonType.damage_relations.double_damage_from.map((d) => d.name);
    this.DoubleDamageTo = pokemonType.damage_relations.double_damage_to.map((d) => d.name);
    this.Pokemon = pokemonType.pokemon.map((p) => p.pokemon.name);
  }

  getRandomPokemonName(): string {
    return this.Pokemon[Math.floor(Math.random() * this.Pokemon.length)];
  }

  toString(): string {
    return (
      `--------------------------------------` +
      `\n${this.Name.toUpperCase()} type Id(${this.Id}): ` +
      `\nIt is from ${this.Generation}` +
      `\nThey make double damage to:` +
      `\n - ` +
      this.DoubleDamageTo.join('\n - ') +
      `\nAnd they receive double damage from:` +
      `\n - ` +
      this.DoubleDamageFrom.join('\n - ')
    );
  }
}

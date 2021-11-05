import PokemonType from "../interfaces/PokemonType";

export default class PokemonTypeModel {
  private Name: string;
  private Id: number;
  private Moves: string;

  constructor(pokemonType: PokemonType) {
    this.Name = pokemonType.name;
    this.Id = pokemonType.id;
    this.Moves = pokemonType.moves.map((m)=> m.name).join(', ')
  }

  toString(): string {
    return `Name: ${this.Name} \nId: ${this.Id}, \nMoves: ${this.Moves}`;
  }
}
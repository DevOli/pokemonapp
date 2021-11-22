import { expect } from 'chai';
import PokemonController from '../../src/controllers/PokemonController';

describe('PokemonControlller', () => {
  it('Shows all pokemons', () => {
    PokemonController.showAllPokemon().then((results) => {
      expect(results).to.be.a('Array');
      expect(results).to.be.lengthOf(20);
    });
  });
  describe('showPokemon(name)', () => {
    it('Shows a specific pokemon by its name', () => {
      const namePokemon = 'pikachu';
      PokemonController.showPokemon(namePokemon).then((result) => {
        expect(result).to.be.a('PokemonModel');
        expect(JSON.stringify(result)).to.equal(
          '{"Name":"pikachu","Id":25,"BaseExperience":112,"Height":4,"Weight":60,"Specie":"pikachu","Abilities":["static","lightning-rod"],"Forms":["pikachu"],"Stats":[["hp",35],["attack",55],["defense",40],["special-attack",50],["special-defense",50],["speed",90]]}'
        );
      });
    });
    it('should throw an error if incorrect name its passed as parameter', async () => {
      const namePokemon = 'wrongName';
      try {
        await PokemonController.showPokemon(namePokemon);
      } catch (e: any) {
        expect(e).to.be.instanceOf(Error);
        expect(e.message).to.eql('Something wrong happened in showPokemon');
      }
    });
  });
});

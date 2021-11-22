import { expect } from 'chai';
import PokemonTypeController from '../../src/controllers/PokemonTypeController';

describe('PokemonTypeControlller', () => {
  it('Shows all types of pokemon', () => {
    PokemonTypeController.showAllPokemonTypes().then((results) => {
      expect(results).to.be.a('Array');
      expect(results).to.be.lengthOf(20);
    });
  });
  describe('showPokemonType(type)', () => {
    it('Shows a specific pokemon type by its type name', () => {
      const namePokemon = 'electric';
      PokemonTypeController.showPokemonType(namePokemon).then((result) => {
        expect(result).to.be.instanceOf('PokemonTypeModel');
        expect(JSON.stringify(result)).to.equal(
          '{"Name":"electric","Id":13,"Moves":["thunder-punch","thunder-shock","thunderbolt","thunder-wave","thunder","zap-cannon","spark","charge","volt-tackle","shock-wave","magnet-rise","thunder-fang","discharge","charge-beam","electro-ball","volt-switch","electroweb","wild-charge","bolt-strike","fusion-bolt","ion-deluge","parabolic-charge","electrify","eerie-impulse","magnetic-flux","electric-terrain","nuzzle","gigavolt-havoc--physical","gigavolt-havoc--special","catastropika","stoked-sparksurfer","zing-zap","10-000-000-volt-thunderbolt","plasma-fists","zippy-zap","pika-papow","buzzy-buzz","bolt-beak","max-lightning","aura-wheel","overdrive","rising-voltage","thunder-cage"],"Generation":"generation-i","DoubleDamageFrom":["ground"],"DoubleDamageTo":["flying","water"],"Pokemon":["pikachu","raichu","magnemite","magneton","voltorb","electrode","electabuzz","jolteon","zapdos","chinchou","lanturn","pichu","mareep","flaaffy","ampharos","elekid","raikou","electrike","manectric","plusle","minun","shinx","luxio","luxray","pachirisu","magnezone","electivire","rotom","blitzle","zebstrika","emolga","joltik","galvantula","tynamo","eelektrik","eelektross","stunfisk","thundurus-incarnate","zekrom","helioptile","heliolisk","dedenne","charjabug","vikavolt","togedemaru","tapu-koko","xurkitree","zeraora","yamper","boltund","toxel","toxtricity-amped","pincurchin","morpeko","dracozolt","arctozolt","regieleki","rotom-heat","rotom-wash","rotom-frost","rotom-fan","rotom-mow","thundurus-therian","ampharos-mega","manectric-mega","pikachu-rock-star","pikachu-belle","pikachu-pop-star","pikachu-phd","pikachu-libre","pikachu-cosplay","pikachu-original-cap","pikachu-hoenn-cap","pikachu-sinnoh-cap","pikachu-unova-cap","pikachu-kalos-cap","pikachu-alola-cap","raichu-alola","geodude-alola","graveler-alola","golem-alola","vikavolt-totem","oricorio-pom-pom","pikachu-partner-cap","togedemaru-totem","toxtricity-low-key","pikachu-gmax","toxtricity-amped-gmax","toxtricity-low-key-gmax"]}'
        );
      });
    });
    it('should throw an error if incorrect type its passed as parameter', async () => {
      const namePokemon = 'wrongType';
      try {
        await PokemonTypeController.showPokemonType(namePokemon);
      } catch (e: any) {
        expect(e).to.be.instanceOf(Error);
        expect(e.message).to.eql('Something wrong happened in getPokemonType');
      }
    });
  });
});

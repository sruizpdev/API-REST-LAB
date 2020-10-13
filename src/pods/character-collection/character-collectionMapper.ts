import { CharacterApi } from 'models';
import { CharacterVm } from './character-collectionVm';

const mapCFromApiToVm = (character: CharacterApi): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
});

export const mapCCFromApiToVm = (collection: CharacterApi[]): CharacterVm[] =>
  collection.map(mapCFromApiToVm);

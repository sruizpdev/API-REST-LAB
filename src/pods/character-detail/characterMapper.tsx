import { CharacterApi } from 'models';
import { CharacterVm } from './characterDetailVm';

export const mapCFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
  id: character.id,
  name: character.name,
  gender: character.gender, 
  image: character.image,
  species: character.species,  
});

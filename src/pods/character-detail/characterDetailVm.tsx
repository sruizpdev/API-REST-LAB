export interface CharacterVm {
  id: number;
  name: string;
  image: string;
  species: string; 
  gender: string;
}

export interface Phrase {
  id: number;
  phrase: string;
}

export const newCharacter = (): CharacterVm => ({
  id: 0,
  name: '',
  image: '',
  species: '',  
  gender: '',
});

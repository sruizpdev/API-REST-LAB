import Axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { mapCFromApiToVm } from './characterMapper';
import { CharacterComponent } from './characterComponent';
import {
  CharacterVm,
  newCharacter,
  Phrase,
} from './characterDetailVm';

interface Params {
  id: string;
}

export const CharacterContainer: React.FC = () => {
  const params: Params = useParams();
  const isPhraseRef = React.useRef<boolean>(false);
  const [characterPhrase, setCharacterPhrase] = React.useState<string>('');
  const [character, setCharacter] = React.useState<CharacterVm>(
    newCharacter()
  );

  const checkIfPhraseExist = async (): Promise<boolean> => {
    const result = await Axios.get('api/phrases');
    return (
      result.data.findIndex((el: Phrase) => el.id === parseInt(params.id)) !==
      -1
    );
  };

  const getCharacter = async (): Promise<void> => {
    const result = await Axios.get(
      `${process.env.API_CHARACTERS_URL}${params.id}`
    );
    const newCharacter: CharacterVm = mapCFromApiToVm(result.data);
    setCharacter(newCharacter);
  };

  const getCharacterPhrase = async (isPhrase: boolean): Promise<void> => {
    if (isPhrase) {
      const result = await Axios.get(
        `${process.env.API_PHRASES_URL}${params.id}`
      );
      setCharacterPhrase(result.data.phrase);
    }
  };

  const updatePhrase = async (id: number, phrase: string): Promise<void> => {
    !isPhraseRef.current
      ? Axios.post(process.env.API_PHRASES_URL, { id, phrase: phrase })
      : Axios.put(`${process.env.API_PHRASES_URL}${id}`, {
          phrase: phrase,
        });
    setCharacterPhrase(phrase);
  };

  const getAllData = async (): Promise<void> => {
    const isPhraseInApi = await checkIfPhraseExist();
    isPhraseRef.current = isPhraseInApi;
    getCharacter();
    getCharacterPhrase(isPhraseRef.current);
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <CharacterComponent
      character={character}
      onUpdate={updatePhrase}
      characterPhrase={characterPhrase}
    />
  );
};

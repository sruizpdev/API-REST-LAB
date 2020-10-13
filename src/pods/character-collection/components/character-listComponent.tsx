import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterVm } from '../character-collectionVm';
import * as classes from './character-listStyles';

interface Props {
  characterCollection: CharacterVm[];
}
export const CharacterList: React.FC<Props> = (props) => {
  const { characterCollection } = props;
  const { listItem, noStyle } = classes;

  return (

    <>
    <ul className={noStyle}>
    {characterCollection.length > 0 &&
        characterCollection.map((character) => (
          <li key={character.id} className={listItem}>
              <img src={character.image} alt={character.name} />
              {character.name}
              <Link to={`character/${character.id}`}>
                <p>Details</p>
              </Link>
          </li>
        ))}
    </ul>
    </>
  );
};

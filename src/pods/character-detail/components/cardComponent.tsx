import React from 'react';
import { CharacterVm } from '../characterDetailVm';
import * as classes from './cardStyles';

interface Props {
  character: CharacterVm;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { character } = props;
  const {
    card, 
    textContainer,
    name,
    textDetail, 
  } = classes;

  return (
    <div className={card}>
      <div className={textContainer}>
        <h1 className={name}> {character.name}</h1>
        <p className={textDetail}> Species:{character.species}</p>
        <p className={textDetail}> Gender: {character.gender}</p>
      </div>
      <img src={character.image} />
    </div>
  );
};

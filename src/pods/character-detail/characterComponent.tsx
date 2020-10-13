import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'core/router'; 
import { CharacterVm } from './characterDetailVm';
import { CardComponent } from './components/cardComponent';
import { CardFooterComponent } from './components/cardFooterComponents';
import * as classes from './characterDetailStyles';

interface Props {
  character: CharacterVm;
  onUpdate: (id: number, phrase: string) => void;
  characterPhrase: string;
}

export const CharacterComponent: React.FC<Props> = (props) => {
  const { character, characterPhrase, onUpdate} = props;
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [updatedPhrase, setUpdatedPhrase] = React.useState<string>(
    characterPhrase
  );
  const {link, container} = classes;

  const update = (id: number): void => {
    setIsEdit(false);
    onUpdate(id, updatedPhrase);
  };

  return (
    <div className={container}>
        <CardComponent character={character} />
        <CardFooterComponent
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          characterPhrase={characterPhrase}
          setUpdatedPhrase={setUpdatedPhrase}
          handleUpdate={update}
          characterId={character.id}
        />
      
      <Link to={switchRoutes.root} className={link}>
        <h2> Go back </h2>
      </Link>
    </div>
  );
};

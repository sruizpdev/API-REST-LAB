import React from 'react';
import * as classes from './cardFooterStyles'; 

interface Props {
  isEdit: boolean;
  setIsEdit: (v: boolean) => void;
  characterPhrase: string;
  setUpdatedPhrase: (phrase: string) => void;
  handleUpdate: (id: number) => void;
  characterId: number;
}

export const CardFooterComponent: React.FC<Props> = (props) => {
  const {
    isEdit,
    characterPhrase,
    characterId,
    setIsEdit,
    setUpdatedPhrase,
    handleUpdate,
    
  } = props;
  const {
    editContainer,
    container,
    button,
    phrase,    
  } = classes;

  return (
    <>
      {!isEdit && (
        <div className={container}>
          <p className={phrase}>
            {characterPhrase
              ? `${characterPhrase}`
              : `There isn't phrase for this character`}
          </p>
          <button onClick={() => setIsEdit(true)}
            className={button}>
                Edit            
            </button>
          
        </div>
      )}
      {isEdit && (
        <div className={container}>           
          <input type="text"
          className={container} 
            placeholder="Insert a new phrase"
            onChange={(e) => setUpdatedPhrase(e.target.value)}
          />
          <div className={editContainer}>
            <button onClick={() => handleUpdate(characterId)}
              className={button}>
                Save            
            </button>
            <button onClick={() => setIsEdit(false)}
              className={button}>
                Delete            
            </button>

          </div>
        </div>
      )}
    </>
  );
};

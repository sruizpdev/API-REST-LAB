import React from 'react';
import { Pagination } from 'pods/character-collection/components/paginationComponent';
import { CharacterList } from './components/character-listComponent';
import { CharacterVm } from './character-collectionVm';

interface Props {
  characterCollection: CharacterVm[]; 
  actualPage: number;
  setActualPage: (page: number) => void;
  lastPage: number;
  getCCollection: () => Promise<void>;
  actualPageRef: React.MutableRefObject<number>;
}

export const CCComponent: React.FC<Props> = (props) => {
  
  const {
    characterCollection,
    actualPage,
    lastPage,    
    actualPageRef,
    getCCollection,
    setActualPage,
  } = props;

  return (
    <>     
        <CharacterList characterCollection={characterCollection} />  
        <Pagination
          actualPage={actualPage}
          setActualPage={setActualPage}
          lastPage={lastPage}
          getCollection={getCCollection}
          actualPageRef={actualPageRef}
        />
       
    </>
  );
};

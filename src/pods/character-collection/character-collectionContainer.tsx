import React from 'react';
import { useCollection } from 'pods/character-collection/hooks';
import { mapCCFromApiToVm } from './character-collectionMapper';
import { CCComponent } from './character-collectionComponent';
import { CharacterVm } from './character-collectionVm';


export const CCCollection: React.FC = () => {
  const {
    actualPage,
    lastPage,
    collection,
    actualPageRef,
    setActualPage,
    getCollection, 
  } = useCollection(
    mapCCFromApiToVm,
    process.env.API_CHARACTERS_URL
  );

  React.useEffect(() => {
    getCollection();
  }, []);

  return (
    <CCComponent
      characterCollection={collection as CharacterVm[]}
      actualPage={actualPage}
      getCCollection={getCollection}
      actualPageRef={actualPageRef}
      setActualPage={setActualPage}
      lastPage={lastPage}
    />
  );
};

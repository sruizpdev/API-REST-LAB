import React from 'react';
import Axios from 'axios';
import { CharacterApi } from 'models';
import { CharacterVm } from 'pods/character-collection/character-collectionVm';

type ApiData = CharacterApi[];
type VmData = CharacterVm[];
type Mapper = (apiData: ApiData) => VmData;

export const useCollection = (mapper: Mapper, url: string) => {
  const [collection, setCollection] = React.useState<VmData>([]);
  const [actualPage, setActualPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const actualPageRef = React.useRef(actualPage);

  const getCollection = async (): Promise<void> => {
    const result = await Axios.get(`${url}?page=${actualPageRef.current}`);
    const newCollection = mapper(result.data.results);
    setLastPage(result.data.info.pages);
    setCollection(newCollection);
  };

  return {
    actualPage,
    lastPage,
    collection,
    actualPageRef,
    setActualPage,
    getCollection,
  };
};

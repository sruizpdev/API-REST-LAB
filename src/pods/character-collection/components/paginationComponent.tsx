import React from 'react';
import * as classes from './paginationStyles';
interface Props {
  actualPage: number;
  lastPage: number;
  setActualPage: (page: number) => void;  
  getCollection: () => Promise<void>;
  actualPageRef: React.MutableRefObject<number>;
}

export const Pagination: React.FC<Props> = (props) => {
  const {
    actualPage,
    actualPageRef,
    lastPage,
    getCollection,
    setActualPage,
  } = props;
  const { container, button } = classes;

  const pagination = (act: string): void => {
    if (act !== 'previousPage') {
      setActualPage(actualPage + 1);
      actualPageRef.current = actualPage + 1;
    } else {
      if(actualPage>0){
        setActualPage(actualPage - 1);
        actualPageRef.current = actualPage - 1;
      }
    }
    getCollection();
  };

  return (
    <div className={container}>
      <button  className={button}
      onClick={() => pagination('previousPage')}>
        Prev
      </button>
       <p> {actualPage} of {lastPage} </p> 
      <button className={button} onClick={() => pagination('next')}>
        Sig
      </button>      
    </div>
  );
};

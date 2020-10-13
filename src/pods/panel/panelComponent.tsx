import React from 'react';
import { CCCollection } from '../character-collection';
import * as classes from './panelStyles';

export const PanelComponent: React.FC = () => {
   
  const { container } = classes;

  return (
    <div className={container}> 
        <CCCollection />      
    </div>
  );
};

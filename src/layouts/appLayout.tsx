import * as React from 'react';
import * as classes from './appLayoutStyles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { content } = classes;

  return (
    <>
      <div className={content}>{children}</div>
    </>
  );
};

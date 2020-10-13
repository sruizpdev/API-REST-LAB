import { css } from 'emotion';

export const container = css`
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 10px;
  color: green;
`;

export const phrase = css`
  margin: 0;
  font-size: 1.3rem;
`;

export const button = css`
  margin-left: 2rem;
  border: 1px solid green;
  font-size: 1.3rem;
  padding: 1rem;
  &:hover {
    background-color: orange;
  }
`;
export const editContainer = css`
  display: flex;
  align-items: center;
`;

export const update = css`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: white;
`;

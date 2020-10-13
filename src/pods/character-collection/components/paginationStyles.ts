import { css } from 'emotion';

export const container = css`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const page = css`
  margin: 0 3rem;
`;

export const button = css`
  position: relative;
  padding: 0.6rem;
  margin: 1rem;
  border: none;
  &:hover {
    background-color: orange;
  }
`;

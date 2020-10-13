import { css } from 'emotion';

export const characterList = css`
  padding: 0;
`;
export const listItem = css`
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 80px;
  }
`;
export const noStyle = css`
  color: red;
  font-size: 1.4rem;
`;

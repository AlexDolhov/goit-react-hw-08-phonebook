import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-flex;
  margin-left: 8px;

  padding: 4px 8px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;

  border: none;
  cursor: pointer;

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #5cb85c;
  }
`;

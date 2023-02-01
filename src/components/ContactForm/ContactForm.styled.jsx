import { Field, ErrorMessage } from 'formik';

import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 10px 8px;

  font-size: 20px;
  cursor: pointer;
`;

export const Input = styled(Field)`
  /* display: inline-block; */
  margin-top: 4px;
  font-size: 16px;
  line-height: 24px;

  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;

  outline: none;
  cursor: pointer;

  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);

  transition: all 250ms linear;

  &:hover {
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
  &:focus {
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }
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

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
`;

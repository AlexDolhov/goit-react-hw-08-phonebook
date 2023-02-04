import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #010101;
  font-weight: 500;
  cursor: pointer;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  &.active {
    color: white;
    background-color: orangered;
  }

  font-weight: 700;
`;

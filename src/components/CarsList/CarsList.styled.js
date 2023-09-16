import styled from "styled-components";

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  margin-top: 100px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  color: #3470ff;
  background-color: transparent;
  border: none;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const List = styled.ul`
  display: grid;
  max-width: 1184px;
  grid-template-columns: repeat(4, 274px);
  grid-gap: 50px 29px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;



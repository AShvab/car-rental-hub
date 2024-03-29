import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCard = styled.div`
  position: absolute;
  width: 541px;
  height: auto;
  padding: 40px;
  border-radius: 24px;
  background: #ffffff;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #121417;
  border: none;
  &:hover,
  &:focus {
    color: #3470ff;
  }
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;

  &:hover,
  &:focus {
    stroke: #3470ff;
  }
`;
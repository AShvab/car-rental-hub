import styled from "styled-components";


export const Item = styled.li`

`;
   
export const Img = styled.img`
    width: 100%;   
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
`
export const LearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  background: #3470ff;
  border: none;
  outline: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;
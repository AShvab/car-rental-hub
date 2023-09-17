import styled from "styled-components";

export const Item = styled.li`
    width: 274px;
  height: 426px;
  margin-bottom:0;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const Model = styled.span`
  color: #3470ff;
`;
export const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;
export const WrapperMake = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const List = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  margin-bottom: 28px;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  line-height: 18px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
`;

export const Element = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 6px;
  padding-right: 6px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
`;

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
  font-weight: 600;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;

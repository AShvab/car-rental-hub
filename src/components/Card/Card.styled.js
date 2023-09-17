import styled from "styled-components";

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: #f3f3f2;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Model = styled.span`
  color: #3470ff;
`;
export const WrapperMake = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
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
export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  color: #121417;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Button = styled.a`
  display: flex;
  width: 168px;
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
  /* margin-top: 12px; */
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

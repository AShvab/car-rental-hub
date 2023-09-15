import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  padding: 12px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-transform: uppercase;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #c5c7d3;
    transform: scale(1.05);
  }
  &.active {
    color: #c5c7d3;
  }
`;

export const LogoLink = styled(Link)`
font-family: 'Poppins', sans-serif;
font-size: 24px;
  color: #ffffff;
  display:flex;
  align-items: center;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;


export const Icon = styled.svg`
  width: 40px;
  height: 40px;
  fill:none;
  stroke: currentColor;
  margin-right: 6px;
`;

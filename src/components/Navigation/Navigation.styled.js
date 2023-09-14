import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  &:hover,
  &:focus {
    color: #3470FF;
  }
  &.active {
    color: #3470FF;
  }
`;

export const LogoLink = styled(Link)`
  color: #ffffff;
`;



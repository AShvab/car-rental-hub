import React from "react";
import { Container, Links, StyledLink, LogoLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Container>
      <LogoLink to={"/"}>Logo</LogoLink>
      <Links>
        <StyledLink to="/">HomePage</StyledLink>
        <StyledLink to="/catalog">CatalogPage</StyledLink>
        <StyledLink to="/favorites">FavoritePage</StyledLink>
      </Links>
    </Container>
  );
};

export default Navigation;

import React from "react";
import {
  Container,
  Links,
  StyledLink,
  LogoLink,
  Icon,
} from "./Navigation.styled";
import sprite from "../../assets/sprite.svg";

const Navigation = () => {
  return (
    <Container>
      <LogoLink to={"/"}>
        <Icon width="32px" height="32px">
          <use href={`${sprite}#icon-spinner9`} />
        </Icon>
        <span>CarRental</span>
      </LogoLink>
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </Links>
    </Container>
  );
};

export default Navigation;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkWrapper, NavWrapper, StyledLink, StyledLogo } from './Navigation.styles';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <StyledLogo onClick={() => navigate('/')}>
        <span>florida</span> skateshop
      </StyledLogo>
      <LinkWrapper>
        <StyledLink to="/shop">shop</StyledLink>
        <StyledLink to="/contact">contact</StyledLink>
        <StyledLink to="/login">login</StyledLink>
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Navigation;

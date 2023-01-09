import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const borderAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;

  }
`;

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-lightBlue);
`;

export const StyledLogo = styled.h1`
  margin-left: 3.5rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: var(--color-darkGrey);
  cursor: pointer;

  span {
    font-weight: 300;
  }
`;

export const LinkWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-grey);
  position: relative;

  &.active {
    font-weight: 900;
    color: var(--color-darkGrey);

    &::after {
      position: absolute;
      content: '';
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-darkGrey);
      animation: ${borderAnimation} 200ms ease-in;
    }
  }
`;

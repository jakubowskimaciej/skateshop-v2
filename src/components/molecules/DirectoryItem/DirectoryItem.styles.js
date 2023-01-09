import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => (image ? image : null)});
  background-position: 0 30%;
  background-size: cover;
`;

export const ItemWrapper = styled.div`
  min-width: 55rem;
  height: 38rem;
  margin: 0 0.75rem 1.5rem;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16), 0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & ${ImageWrapper} {
      transform: scale(1.02);
      transition: transform 350ms ease-in-out;
    }
  }
`;

export const TextWrapper = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  border: 0.2rem solid var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 900;
    z-index: 1;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 400;
    z-index: 1;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;

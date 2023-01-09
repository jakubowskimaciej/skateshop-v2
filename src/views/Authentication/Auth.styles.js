import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 70%;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 10rem;
  }
`;

export const AuthWrapper = styled.div`
  width: 55rem;
  min-height: 55rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
  color: var(--color-darkGrey);
  margin-bottom: 1rem;
`;

export const StyledSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-grey);
  margin-left: -6.5rem;
`;

export const StyledForm = styled.form`
  padding: 2rem 3rem;
  margin-top: 2rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: 35rem;
  padding: 0.4rem 1.5rem;
  margin: 1rem 0;
  border: 0.1rem solid var(--color-lightGrey);
  box-sizing: border-box;
  box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.09);
  border-radius: 2.5rem;
  transition: all 300ms ease;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.l};

  &:focus {
    outline: none;
    box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.5);
  }

  ${({ theme }) => theme.mediaQueries.ultra} {
    padding: 1rem 2.5rem;
  }
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: var(--color-darkGrey);
  margin-right: 1rem;

  ${({ theme }) => theme.mediaQueries.ultra} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: ${({ isSmall }) => (isSmall ? '0.7rem 1.7rem' : '1rem 2rem')};
  margin: 1.5rem 0;
  background-color: ${({ isSecondary }) => (isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)')};
  color: var(--color-white);
  border-radius: 5rem;
  border: 0.1rem solid ${({ isSecondary }) => (isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)')};
  font-size: 1.5rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16), 0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  transition: all 200ms ease;
  &:hover {
    background-color: var(--color-white);
    color: ${({ isSecondary }) => (isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)')};
  }
`;

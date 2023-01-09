import React from 'react';
import { Input, Label, Wrapper, AuthWrapper, StyledTitle, StyledSubtitle, FormField, StyledForm, ButtonWrapper, Button } from './Auth.styles';

const Auth = () => {
  return (
    <Wrapper>
      <AuthWrapper>
        <StyledTitle>I already have an account.</StyledTitle>
        <StyledSubtitle>Sign in with your email and password</StyledSubtitle>
        <StyledForm>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" id="email" autoComplete="off" />
          </FormField>
          <FormField>
            <Label htmlFor="email">Password</Label>
            <Input type="password" name="password" id="password" autoComplete="off" />
          </FormField>
          <ButtonWrapper>
            <Button>Sign in</Button>
            <Button isSecondary>Sign in with Google</Button>
          </ButtonWrapper>
        </StyledForm>
      </AuthWrapper>
      <AuthWrapper>
        <StyledTitle>I do not have an account.</StyledTitle>
        <StyledSubtitle>Sign in with your email and password</StyledSubtitle>
        <StyledForm>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" id="email" autoComplete="off" />
          </FormField>
          <FormField>
            <Label htmlFor="email">Password</Label>
            <Input type="password" name="password" id="password" autoComplete="off" />
          </FormField>
          <ButtonWrapper>
            <Button>Sign up</Button>
          </ButtonWrapper>
        </StyledForm>
      </AuthWrapper>
    </Wrapper>
  );
};

export default Auth;

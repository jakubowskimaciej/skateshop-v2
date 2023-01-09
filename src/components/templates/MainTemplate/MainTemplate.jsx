import Navigation from 'components/molecules/Navigation/Navigation';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 9rem 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

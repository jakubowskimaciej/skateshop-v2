import GlobalStyles from 'assets/styles/GlobalStyles';
import theme from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainTemplate>
          <GlobalStyles />
          {children}
        </MainTemplate>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;

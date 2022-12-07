import GlobalStyles from 'assets/styles/GlobalStyles';
import theme from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;

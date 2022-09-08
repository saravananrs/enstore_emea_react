import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import {Store} from '../src/redux/Store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import './store-magento.css'
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Content from './views/Contents/Content';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#f37321',
    },
    dark: {
      main: "#333"
    }
  },
});
function App() {
  return (
    <div className="App">
    <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Content />
        <Footer />
      </QueryClientProvider>
      </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

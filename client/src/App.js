import React from "react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./redux/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "./store-magento.css";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Content from "./views/Contents/Content";
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
      main: "#333",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#f37321",
    },
    dark: {
      main: "#333",
    },
  },
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <Header />
              <Content />
              <Footer />
            </QueryClientProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

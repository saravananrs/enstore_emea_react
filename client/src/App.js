import React from "react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./redux/Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "./store-magento.css";
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
});
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              {/* <Header /> */}
              <Content />
              {/* <Footer /> */}
            </QueryClientProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import theme from "./theme";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

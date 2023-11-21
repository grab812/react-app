import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import theme from "./theme";
import GlobalStyle from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

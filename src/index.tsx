import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./Root";

const queryClient = new QueryClient()
const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
        <Root/>
    </QueryClientProvider>
  </React.StrictMode>,
);

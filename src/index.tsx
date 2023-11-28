import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./Root";
import {RecoilRoot} from "recoil";

const queryClient = new QueryClient()
const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <RecoilRoot>
   <QueryClientProvider client={queryClient}>
        <Root/>
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);


import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import {darkTheme,lightTheme} from "./theme";
import GlobalStyle from "./styles/GlobalStyles";
import {ReactQueryDevtools} from "react-query/devtools";
import { useState } from "react";
function Root() {
    const [toggleTheme, setToggleTheme] = useState(false);
    const themeChange = ()=>setToggleTheme(!toggleTheme);
    return(
        <ThemeProvider theme={toggleTheme?lightTheme:darkTheme}>
            <button onClick={themeChange}>{toggleTheme?"dark Mode":"light Mode"}</button>
            <GlobalStyle/>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    )
}
export default Root;

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ModeBtn } from "./components/Components";
function Root() {
  const [themeState, setThemeState] = useState("light");
  return (
    <ThemeProvider theme={themeState === "dark" ? darkTheme : lightTheme}>
      <ModeBtn
        $top="10px"
        $left="10px"
        $width="30px"
        $height="30px"
        onClick={() =>
          setThemeState((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
          )
        }
      >
        {themeState === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </ModeBtn>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}
export default Root;

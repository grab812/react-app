import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "react-query/devtools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ModeBtn } from "./components/Components";
import { isDarkAtom } from "./atoms";
import { useRecoilState } from "recoil";

function Root() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkMode = () => setIsDark((curr) => !curr);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModeBtn
        $top="10px"
        $left="10px"
        $width="30px"
        $height="30px"
        onClick={toggleDarkMode}
      >
        {isDark ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </ModeBtn>
      <GlobalStyle />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}
export default Root;

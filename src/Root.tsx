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
import {useRecoilValue,useSetRecoilState} from "recoil";
import { isDarkAtom } from "./atoms";
function Root() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtoms = () => setDarkAtom((prev) => !prev);
  console.log(isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModeBtn
        $top="10px"
        $left="10px"
        $width="30px"
        $height="30px"
        onClick={toggleDarkAtoms}
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

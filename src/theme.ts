import { DefaultTheme } from "styled-components";
export const darkTheme: DefaultTheme = {
  mode: "darkTheme",
  bgColor: {
    main: "#2f3640",
    accent: "#9c88ff",
    card: "transparent",
    nav: "#2f3640",
    detail: "rgba(0, 0, 0, 0.5)",
  },
  textColor: "white",
  accentColor: "white",
  grayColor: "#a3a3a3",
};
export const lightTheme: DefaultTheme = {
  mode: "lightTheme",
  bgColor: {
    main: "#efefef",
    accent: "#ffffff",
    card: "white",
    nav: "#ffffff",
    detail: "rgb(156,136,255,.3)",
  },
  textColor: "black",
  accentColor: "#9c88ff",
  grayColor: "#4f4f4f",
};

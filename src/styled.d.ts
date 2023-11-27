import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    bgColor: {
      main: string;
      accent: string;
      card: string;
      nav: string;
      detail: string;
    };
    textColor: string;
    accentColor: string;
    grayColor: string;
  }
}

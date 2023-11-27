import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentBgColor: string;
    accentColor: string;
    cardBgColor: string;
    grayColor: string;
    navBgColor: string;
    detailBgColor: string;
  }
}

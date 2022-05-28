import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      blocks: string;
      text: string;
      textOpacity: string;
      grey: string;
      red: string;
      green: string;
    };
    devices: {
      wideMobile: number;
      tablet: number;
      desktop: number;
    };
  }
}

import { FC, ReactNode } from "react";
import { ThemeProvider as ThemeProviderInstance } from "styled-components";

const theme = {
  colors: {
    background: "rgb(36, 40, 47)",
    blocks: "rgb(60, 62, 67)",
    text: "rgb(246, 246, 246)",
    textOpacity: "rgb(127, 128, 129)",
    grey: "rgb(157, 157, 157)",
    red: "rgb(213, 60, 45)",
    green: "rgb(84, 203, 67)",
  },
  devices: {
    wideMobile: 460,
    tablet: 900,
    desktop: 1200,
  },
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <ThemeProviderInstance theme={theme}>{children}</ThemeProviderInstance>
);

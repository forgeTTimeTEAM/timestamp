import { ReactNode } from "react";

import { useUserContext } from "../../Context";

import { ThemeProvider } from "styled-components";
import * as palette from "../../styles/theme";

interface IThemeProps {
  children: ReactNode;
}

function Theme({ children }: IThemeProps) {
  const { themeIsDark } = useUserContext();
  const theme = themeIsDark ? "dark" : "light";

  return <ThemeProvider theme={palette[theme]}>{children}</ThemeProvider>;
}

export default Theme;

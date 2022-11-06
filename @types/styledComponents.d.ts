import { ITheme } from "../styles/theme/interface";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

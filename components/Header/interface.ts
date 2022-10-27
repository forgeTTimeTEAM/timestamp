import { ITheme } from "../../styles/theme/interface";

export interface IHeaderProps {
  dashboard?: boolean;
}

export interface IStyledHeaderProps extends IHeaderProps {
  theme?: ITheme;
}

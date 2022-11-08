import { BiSearch, BiSun } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { CgMoon } from "react-icons/cg";

import { useUserContext } from "../../Context";

import { IHeaderProps } from "./interface";

import Logo from "../../public/logo.svg";
import AvatarIcon from "../Avatar";
import { HeaderContainer } from "./styles";

function Header({ dashboard }: IHeaderProps) {
  const { themeIsDark, changeTheme, searchInputValue, setSearchInputValue } =
    useUserContext();

  const themeIcon = !themeIsDark ? (
    <CgMoon size="2rem" />
  ) : (
    <BiSun size={"2em"} />
  );

  const themeButton = (
    <button className="sideElement" onClick={changeTheme}>
      {themeIcon}
    </button>
  );

  const dashboardElement = (
    <div className="sideElement">
      <div>
        <input
          className={!!searchInputValue ? "Active" : ""}
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <BiSearch />
      </div>
      <AvatarIcon />
    </div>
  );

  const sideElement = dashboard ? dashboardElement : themeButton;

  return (
    <HeaderContainer dashboard={dashboard}>
      <div className="container">
        <div className="elements">
          <div className="logo">
            <h1>time stamp</h1>
            <Logo />
          </div>
          {sideElement}
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;

import { useState } from "react";

import { BiSun } from "react-icons/bi";
import { CgMoon, CgPlayTrackNextR } from "react-icons/cg";

import { HeaderContainer } from "./styles";

function Header() {
  const [themeIsDark, setThemeIsDark] = useState<boolean>(false);

  const themeDark = () => {
    setThemeIsDark(!themeIsDark);
  };

  const themeIcon = !themeIsDark ? (
    <CgMoon size="2rem" />
  ) : (
    <BiSun size={"2em"} />
  );

  return (
    <HeaderContainer>
      <div className="container">
        <div className="elements">
          <div className="logo">
            <h1>time stamp</h1>
            <CgPlayTrackNextR />
          </div>
          <button onClick={() => themeDark()}>{themeIcon}</button>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;

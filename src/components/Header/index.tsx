import { useState } from "react";

import { CgMoon, CgPlayTrackNextR } from "react-icons/cg";
import { BiSun } from "react-icons/bi";

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
      <h1>time stamp</h1>
      <CgPlayTrackNextR />

      <button onClick={() => themeDark()}>{themeIcon}</button>
    </HeaderContainer>
  );
}

export default Header;

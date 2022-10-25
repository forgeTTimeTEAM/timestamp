import Image from "next/image";
import { useState } from "react";
import { BiSearch, BiSun } from "react-icons/bi";
import { CgMoon, CgPlayTrackNextR } from "react-icons/cg";
import { useUserContext } from "../../Context";

import { HeaderContainer } from "./styles";

interface IHeaderProps {
  dashboard?: boolean;
}

function Header({ dashboard }: IHeaderProps) {
  const { themeIsDark, changeTheme } = useUserContext();
  const [search, setSearch] = useState("");

  const themeIcon = !themeIsDark ? (
    <CgMoon size="2rem" />
  ) : (
    <BiSun size={"2em"} />
  );

  const themeButton = (
    <button className="sideElement" onClick={() => changeTheme()}>
      {themeIcon}
    </button>
  );

  const dashboardElement = (
    <div className="sideElement">
      <div>
        <input
          className={!!search ? "Active" : ""}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch />
      </div>
      <figure>
        <Image src="/vercel.svg" alt="temporario" layout="fill" />
      </figure>
    </div>
  );

  const sideElement = dashboard ? dashboardElement : themeButton;

  return (
    <HeaderContainer dashboard={dashboard}>
      <div className="container">
        <div className="elements">
          <div className="logo">
            <h1>time stamp</h1>
            <CgPlayTrackNextR />
          </div>
          {sideElement}
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;

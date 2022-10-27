import { createContext, useEffect, useState } from "react";

import { videosArray } from "../../utils/videosArray";

import { IUserContext, IUserProviderProps, IVideos } from "./interface";

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const [themeIsDark, setThemeIsDark] = useState(true);
  const [videos, setVideos] = useState<IVideos[]>(videosArray);
  const [searcheredVideos, setSearcheredVideos] = useState<IVideos[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const changeTheme = () => {
    setThemeIsDark(!themeIsDark);
  };

  const searchVideos = () => {
    const searcheredVideos = videos.filter(({ marks }) => {
      const videos = marks.some(({ title }) =>
        title
          .toLowerCase()
          .trim()
          .includes(searchInputValue.toLowerCase().trim())
      );

      return videos;
    });

    setSearcheredVideos(searcheredVideos);
  };

  useEffect(() => {
    !!searchInputValue && searchVideos();
  }, [searchInputValue]);

  useEffect(() => {
    const localTheme = JSON.parse(
      localStorage.getItem("@timestamp:themeDark")!
    );

    if (typeof localTheme === "boolean") {
      setThemeIsDark(localTheme);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        themeIsDark,
        changeTheme,
        searchInputValue,
        setSearchInputValue,
        videos,
        searcheredVideos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

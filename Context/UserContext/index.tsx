import { createContext, ReactNode, useEffect, useState } from "react";

interface IUserContext {
  themeIsDark: boolean;
  changeTheme: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const [themeIsDark, setThemeIsDark] = useState(false);

  const changeTheme = () => {
    setThemeIsDark(!themeIsDark);
  };

  useEffect(() => {
    const localTheme = JSON.parse(
      localStorage.getItem("@timestamp:themeDark")!
    );

    if (typeof localTheme === "boolean") {
      setThemeIsDark(localTheme);
    }
  }, []);

  return (
    <UserContext.Provider value={{ themeIsDark, changeTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

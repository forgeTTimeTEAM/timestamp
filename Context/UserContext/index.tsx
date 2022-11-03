import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";

import { videosArray } from "../../utils/videosArray";
import { schemaMarkers } from "../../validator/schemas";

import {
  IMarkers,
  IUserContext,
  IUserProviderProps,
  IVideos,
} from "./interface";

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const [modalEditVideoIsOpen, setModalEditVideoIsOpen] =
    useState<boolean>(false);
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [url, setUrl] = useState<string>("");
  const [marcadores, setMarcadores] = useState<IMarkers[]>([]);
  const [sprint, setSprint] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [themeIsDark, setThemeIsDark] = useState(true);
  const [videos, setVideos] = useState<IVideos[]>(videosArray);
  const [searcheredVideos, setSearcheredVideos] = useState<IVideos[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [urlValue, setUrlValue] = useState<string>("");

  /* const user = JSON.parse(localStorage.getItem("@time-stamp:user") as any);
  const token = localStorage.getItem("@time-stamp:token");
  const data = new Date(); */

  const changeTheme = () => {
    setThemeIsDark(!themeIsDark);
    localStorage.setItem("@timestamp:themeDark", `${!themeIsDark}`);
  };

  const clearUrl = () => {
    setUrlValue("");
  };

  const searchVideos = () => {
    const searcheredVideos = videos.filter(({ name, marks }) => {
      const videoMarks = marks.some(({ title }) =>
        title
          .toLowerCase()
          .trim()
          .includes(searchInputValue.toLowerCase().trim())
      );

      return (
        videoMarks ||
        name
          .toLowerCase()
          .trim()
          .includes(searchInputValue.toLowerCase().trim())
      );
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

  const toggleModalVisibility = () => {
    setModalEditVideoIsOpen(!modalEditVideoIsOpen);
  };

  const onSubmit = (data: IMarkers) => {
    setMarkers([...markers, data]);
  };

  /*   const exemplo = {
    url: urlValue,
    sprintId: sprint,
    day: day,
    moduleId: user?.module,
    userId: user?.id,
    created_at: data.toLocaleDateString(),
    update_at: data.toLocaleDateString(),
    marks: markers,
  }; */

  const postVideos = () => {
    toggleModalVisibility();
    api
      .post("/videos", exemplo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setMarcadores(res.data.marks);
        setUrl(res.data.url);
      })
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMarkers>({ resolver: yupResolver(schemaMarkers) });

  return (
    <UserContext.Provider
      value={{
        themeIsDark,
        changeTheme,
        searchInputValue,
        setSearchInputValue,
        videos,
        searcheredVideos,
        toggleModalVisibility,
        clearUrl,
        urlValue,
        onSubmit,
        postVideos,
        setUrlValue,
        modalEditVideoIsOpen,
        markers,
        setMarkers,
        /*  exemplo, */
        marcadores,
        url,
        setUrl,
        day,
        setDay,
        sprint,
        setSprint,
        handleSubmit,
        register,
        errors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

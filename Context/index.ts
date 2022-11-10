import { useContext } from "react";

import { UserContext } from "./UserContext";

export const useUserContext = () => useContext(UserContext);

const user = {
  id: "asasuashuasuhsauhsa",
  module: 3,
  isAdm: true,
  videos: [
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4",
      name: "Dando os primeiros passos no React",
      sprintId: 1,
      day: "Segunda-feira",
      extra: false,
      moduleId: 3,
      userId: 3,
      created_at: "18/07/22",
      updated_at: "05/09/22",
      marks: [
        {
          id: 1,
          time_video: "00:10",
          title: "O que é o React?",
        },
      ],
    },
  ],
};

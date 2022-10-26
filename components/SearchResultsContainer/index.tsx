import VideoList from "./VideoList";

import { VideoSearchContainer } from "./styles";

function SearchResultsContainer() {
  const videos = [
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4",
      name: "Onboarding e Primeiros Passos no React",
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
          title: "Bem-Vindo, ao React!",
        },
        {
          id: 2,
          time_video: "04:30",
          title: "json-server",
        },
      ],
      id: 1,
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220719-123327_Recording_1760x900.mp4",
      name: "Componentizando com props e children",
      sprintId: 1,
      day: "Terça-feira",
      extra: false,
      moduleId: 3,
      userId: 3,
      created_at: "19/07/22",
      updated_at: "07/09/22",
      marks: [
        {
          id: 1,
          time_video: "50:20",
          title: "React",
        },
      ],
      id: 2,
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220720-123353_Recording_1760x900.mp4",
      name: "Use State e Imutabilidade",
      sprintId: 1,
      day: "Quarta-feira",
      extra: false,
      moduleId: 3,
      userId: 3,
      created_at: "20/07/22",
      updated_at: "07/09/22",
      marks: [
        {
          id: 1,
          time_video: "26:10",
          title: "Form, useState",
        },
      ],
      id: 3,
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4",
      name: "Onboarding e Primeiros Passos no React",
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
          title: "Bem-Vindo, ao React!",
        },
        {
          id: 2,
          time_video: "04:30",
          title: "json-server",
        },
      ],
      id: 4,
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4",
      name: "Onboarding e Primeiros Passos no React",
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
          title: "Bem-Vindo, ao React!",
        },
        {
          id: 2,
          time_video: "04:30",
          title: "json-server",
        },
      ],
      id: 5,
    },
  ];

  return (
    <VideoSearchContainer>
      <ul className="videosList">
        {videos.map((video) => (
          <VideoList key={video.id} video={video} />
        ))}
      </ul>
    </VideoSearchContainer>
  );
}

export default SearchResultsContainer;

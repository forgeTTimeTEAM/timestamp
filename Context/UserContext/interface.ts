import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IUserContext {
  themeIsDark: boolean;
  changeTheme: () => void;
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  videos: IVideos[];
  searcheredVideos: IVideos[];
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IVideos {
  id: number;
  url: string;
  name: string;
  sprintId: number;
  day: string;
  extra: boolean;
  moduleId: number;
  userId: number;
  created_at: string;
  updated_at: string;
  marks: IVideoMarks[];
}

export interface IVideoMarks {
  id: number;
  time_video: string;
  title: string;
}

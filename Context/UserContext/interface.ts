import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from "react-hook-form";

export interface IUserContext {
  day: string;
  themeIsDark: boolean;
  searchInputValue: string;
  url: string;
  urlValue: string;
  modalEditVideoIsOpen: boolean;
  setSprint: any;
  sprint: string | undefined;
  markers: IMarkers[];
  videos: IVideos[];
  searcheredVideos: IVideos[];
  marcadores: IMarkers[];
  createUser: (data: IUserRequest) => Promise<void>;
  loginUser: (data: IUserLogin) => Promise<void>;
  /*  exemplo: {
    url: string;
    marks: IMarkers[];
    userId: number;
    moduleId: number | null;
    created_at: string;
    update_at: string;
  }; */
  errors: FieldErrorsImpl<IMarkers>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  handleSubmit: UseFormHandleSubmit<IMarkers>;
  register: UseFormRegister<IMarkers>;
  changeTheme: () => void;
  toggleModalVisibility: () => void;
  clearUrl: () => void;
  postVideos: () => void;
  onSubmit: (data: IMarkers) => void;
  setUrlValue: (value: string) => void;
  setDay: (value: string) => void;
  setMarkers: Dispatch<SetStateAction<IMarkers[]>>;
}

export interface IMarkers {
  id: string;
  time_video: string;
  title: string;
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

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  groupId: string;
  moduleId: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

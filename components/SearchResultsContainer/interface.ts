import { IVideos } from "../../Context/UserContext/interface";

export interface IVideoListProps {
  video: IVideos;
}
export interface IStyledVideoListProps {
  searcheredVideosLength: number;
}

export interface IVideoNotFoundProps {
  searchInputValue: string;
}

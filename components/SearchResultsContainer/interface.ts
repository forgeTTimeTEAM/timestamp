import { IVideos } from "../../Context/UserContext/interface";

export interface IVideoListProps {
  video: IVideos;
}

export interface IVideoNotFoundProps {
  searchInputValue: string;
}

export interface IStyledVideoListProps {
  searcheredVideosLength: number;
}

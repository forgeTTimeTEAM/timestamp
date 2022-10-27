import VideoList from "./VideoList";

import VideoNotFound from "../VideoNotFound";

import { useUserContext } from "../../Context";

import { VideoSearchContainer } from "./styles";

function SearchResultsContainer() {
  const { searchInputValue, searcheredVideos, videos } = useUserContext();

  const videoListRender = () => {
    if (searchInputValue && searcheredVideos.length !== 0) {
      return (
        <ul className="videosList">
          {searcheredVideos.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </ul>
      );
    }
    if (!searchInputValue) {
      return (
        <ul className="videosList">
          {videos.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </ul>
      );
    }
    return null;
  };

  const videoNotFoundRender = () => {
    if (searcheredVideos.length === 0 && searchInputValue) {
      return <VideoNotFound searchInputValue={searchInputValue} />;
    }
    return null;
  };

  return (
    <VideoSearchContainer searcheredVideosLength={searcheredVideos.length}>
      {videoListRender()}
      {videoNotFoundRender()}
    </VideoSearchContainer>
  );
}

export default SearchResultsContainer;

import VideoList from "./VideoList";
import VideoNotFound from "./VideoNotFound";

import { useUserContext } from "../../Context";

import { VideoSearchContainer } from "./styles";

function SearchResultsContainer() {
  const { searchInputValue, searcheredVideos, videos } = useUserContext();

  const videoListRender = () => {
    if (!searchInputValue) {
      return (
        <ul className="videosList">
          {videos.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </ul>
      );
    } else if (!!searchInputValue && searcheredVideos.length !== 0) {
      return (
        <ul className="videosList">
          {searcheredVideos.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </ul>
      );
    } else {
      return <VideoNotFound searchInputValue={searchInputValue} />;
    }
  };

  return (
    <VideoSearchContainer searcheredVideosLength={searcheredVideos.length}>
      {videoListRender()}
    </VideoSearchContainer>
  );
}

export default SearchResultsContainer;

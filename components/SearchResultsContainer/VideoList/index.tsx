import { IVideoListProps } from "../interface";

import { VideoContainer } from "./styles";

function VideoList({ video }: IVideoListProps) {
  const { name, marks } = video;

  return (
    <VideoContainer role="button">
      <div className="videoThumb">
        <div></div>
      </div>
      <section className="videoMarksContainer">
        <div>
          <h4>{name}</h4>
          {marks.map((marker) => (
            <span key={marker.id} className="videoMarkerText">
              {marker.time_video} - {marker.title}
            </span>
          ))}
        </div>
      </section>
    </VideoContainer>
  );
}

export default VideoList;

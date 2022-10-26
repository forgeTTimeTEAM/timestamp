import { VideoContainer } from "./styles";

function VideoList({ video }: any) {
  const { name, marks } = video;

  return (
    <VideoContainer>
      <div className="videoThumb">
        <div></div>
      </div>
      <ul className="videoMarksContainer">
        <li>
          <h4>{name}</h4>
          {marks.map((marker: any) => (
            <span className="videoMarkerText">
              {marker.time_video} - {marker.title}
            </span>
          ))}
        </li>
      </ul>
    </VideoContainer>
  );
}

export default VideoList;

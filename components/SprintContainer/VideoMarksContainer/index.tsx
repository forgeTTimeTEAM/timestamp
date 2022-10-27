import { AsideMarcks, ConainerMarksVideo } from "./style";

function VideoMarksContainer() {
  return (
    <ConainerMarksVideo>
      <video controls>
        <source src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m4/Sprint_6/GMT20221026-122315_Recording_1920x1080.mp4" type="video/mp4"/>
      </video>

      <AsideMarcks>
        <h1>Marcadores</h1>
        <ul>
          <li></li>
        </ul>
      </AsideMarcks>

    </ConainerMarksVideo>
  )
}

export default VideoMarksContainer;
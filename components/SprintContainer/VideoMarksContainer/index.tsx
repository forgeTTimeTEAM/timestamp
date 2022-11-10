import { AsideMarcks, ConainerMarksVideo } from "./style";
import { CgOptions } from "react-icons/cg";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

function VideoMarksContainer() {
  const { toggleModalVisibility } = useContext(UserContext);

  const openModal = () => {
    toggleModalVisibility();
    console.log("abre modal");
  };

  return (
    <ConainerMarksVideo>
      <video controls>
        <source
          src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m4/Sprint_6/GMT20221026-122315_Recording_1920x1080.mp4"
          type="video/mp4"
        />
      </video>

      <AsideMarcks>
        <h1>Marcadores</h1>
        <ul>
          <li>
            <p>09:12</p>
            <span>UseEffect</span>
            <span className="markOptions" onClick={() => openModal()}>
              <CgOptions />
            </span>
          </li>
        </ul>
      </AsideMarcks>
    </ConainerMarksVideo>
  );
}

export default VideoMarksContainer;

import ListDay from "./ListDay";

import VideoMarksContainer from "./VideoMarksContainer";

import { ContainerContent, ContainerMain } from "./styles";
import ModalAddVideo from "../ModalAddVideo";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function SprintContainer() {
  const { modalEditVideoIsOpen } = useContext(UserContext);
  return (
    <ContainerMain>
      <div className="header">
        <h1>Sprint 1</h1>
      </div>

      <ContainerContent>
        <ListDay />
        <VideoMarksContainer />
        {modalEditVideoIsOpen && <ModalAddVideo />}
      </ContainerContent>
    </ContainerMain>
  );
}

export default SprintContainer;

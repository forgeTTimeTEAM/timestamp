import ListDay from "./ListDay";

import VideoMarksContainer from "./VideoMarksContainer";

import { ContainerContent, ContainerMain } from "./styles";

function SprintContainer() {
  return (
    <ContainerMain>
      <div className="header">
        <h1>Sprint 1</h1>
      </div>

      <ContainerContent>
        <ListDay />
        <VideoMarksContainer />
      </ContainerContent>
    </ContainerMain>
  );
}

export default SprintContainer;

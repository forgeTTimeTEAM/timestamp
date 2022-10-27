import ListDay from "./ListDay";
import { ContainerContent, ContainerMain } from "./styles";
import VideoMarksContainer from "./VideoMarksContainer";

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
  )
}

export default SprintContainer;
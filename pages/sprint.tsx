import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintContainer from "../components/SprintContainer";
import { DashboardContainer, MainContainer } from "../styles/dashboard/styles";

function Sprint() {
    return (
      <DashboardContainer>
        <Header dashboard />
        <MainContainer>
          <SprintContainer />
          <SearchResultsContainer />
        </MainContainer>
      </DashboardContainer>
    );
}

export default Sprint;

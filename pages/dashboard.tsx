import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintsSection from "../components/SprintsSection";

import { DashboardContainer, MainContainer } from "../styles/dashboard/styles";

function Dashboard() {
  return (
    <DashboardContainer>
      <Header dashboard />
      <MainContainer>
        <SprintsSection />
        <SearchResultsContainer />
      </MainContainer>
    </DashboardContainer>
  );
}

export default Dashboard;

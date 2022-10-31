import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintsSection from "../components/SprintsSection";

import { MainContainer } from "../styles/dashboard/styles";

function Dashboard() {
  return (
    <>
      <Header dashboard />
      <MainContainer>
        <SprintsSection />
        <SearchResultsContainer />
      </MainContainer>
    </>
  );
}

export default Dashboard;

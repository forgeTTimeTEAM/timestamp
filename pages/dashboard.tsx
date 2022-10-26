import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintsSection from "../components/SprintsSection";

import { Container, Main } from "../styles/dashboard/styles";

function Dashboard() {
  return (
    <Container>
      <Header dashboard />
      <Main>
        <SprintsSection />
        <SearchResultsContainer />
      </Main>
    </Container>
  );
}

export default Dashboard;

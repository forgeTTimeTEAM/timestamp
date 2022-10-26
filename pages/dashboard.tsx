import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintsSection from "../components/SprintsSection";

function Dashboard() {
  return (
    <>
      <Header dashboard />
      <SprintsSection />
      <SearchResultsContainer />
    </>
  );
}

export default Dashboard;

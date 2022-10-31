import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SprintContainer from "../components/SprintContainer";
import { MainContainer } from "../styles/dashboard/styles";

function Sprint() {
  return (
    <>
      <Header dashboard />
      <>
        <SprintContainer />
        <SearchResultsContainer />
      </>
    </>
  );
}

export default Sprint;

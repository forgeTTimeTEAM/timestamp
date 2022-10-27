import { sprintsArray } from "../../utils/sprintsArray";

import SprintsCard from "./SprintsCard";

import { StyledSection } from "./styles";

function SprintsSection() {
  return (
    <StyledSection>
      <ul>
        {sprintsArray.map((sprint, index) => (
          <SprintsCard
            key={index}
            module={sprint.module}
            sprint={sprint.sprint}
            date={sprint.date}
          />
        ))}
      </ul>
    </StyledSection>
  );
}

export default SprintsSection;

import { useState } from "react";

import SprintsCard from "./SprintsCard";

import { StyledSection } from "./styles";

function SprintsSection() {
  const [cards, setCards] = useState([
    { module: "M3", date: "05/07/22", sprint: 1 },
    { module: "M3", date: "12/07/22", sprint: 2 },
    { module: "M3", date: "21/07/22", sprint: 3 },
    { module: "M3", date: "28/07/22", sprint: 4 },
    { module: "M3", date: "05/08/22", sprint: 5 },
    { module: "M3", date: "12/08/22", sprint: 6 },
    { module: "M3", date: "19/08/22", sprint: 7 },
    { module: "M3", date: "28/08/22", sprint: 8 },
  ]);

  return (
    <StyledSection>
      <ul>
        {cards.map((sprint, index) => (
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

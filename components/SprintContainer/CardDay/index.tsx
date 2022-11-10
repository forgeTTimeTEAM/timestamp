import { useState } from "react";

import { FaChevronRight } from "react-icons/fa";

import { LiCard, DetailsUl } from "./style";

export default function CardDay() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <LiCard onClick={() => setShowDetails(!showDetails)}>
        {/* {showDetails ? <FaChevronDown /> : <FaChevronRight />} */}
        <FaChevronRight className={showDetails ? "open" : ""} />
        <p>Segunda-feira</p>
      </LiCard>
      {showDetails && (
        <DetailsUl>
          <li className="open">Demo</li>
        </DetailsUl>
      )}
    </>
  );
}

import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { LiCard, DivDetails } from "./style";


export default function CardDay() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <LiCard onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? <FaChevronDown /> : <FaChevronRight />}
        <p>Segunda-feira</p>
      </LiCard>
      {showDetails && (
        <DivDetails>
          <p>Demo</p>
        </DivDetails>
      )}
    </>
  )
}
import styled from "styled-components";

const StyledSprintsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem;

  min-width: 13.75rem;
  padding: 0.9rem;

  background-color: #0f2d51;
  border-left: 3px solid #d3e0f0;
  box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  cursor: pointer;

  transition: .3s;

  :hover {
    border-left: 3px solid #190919;
  }

  h2 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 1.25rem;
    color: #d3e0f0;
  }

  p {
    font-family: "Roboto Mono", monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 0.94rem;
    color: #618bbe;
  }
`;

export default StyledSprintsCard;

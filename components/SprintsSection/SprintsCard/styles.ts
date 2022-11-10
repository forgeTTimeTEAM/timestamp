import styled from "styled-components";

const StyledSprintsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem;

  min-width: 13.75rem;
  padding: 0.9rem;

  background-color: ${({ theme }) => theme.searchVideosContainer.linear_1};
  border-left: 5px solid ${({ theme }) => theme.dashboard.sprints_card_border};
  box-shadow: 1px 1px 20px 2px ${({ theme }) => theme.transparent_gray};
  border-radius: 10px;

  cursor: pointer;

  transition: 0.3s;

  :hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.dashboard.sprints_card_hover};
  }

  h2 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.searchVideosContainer.linear_2};
  }

  p {
    font-family: "Roboto Mono", monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 0.94rem;
    color: ${({ theme }) => theme.dashboard.sprints_card_p_color};
  }
`;

export default StyledSprintsCard;

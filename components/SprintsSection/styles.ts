import styled from "styled-components";

const StyledSection = styled.section`
  width: 80%;
  margin: 1.5rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.2rem;

    @media screen and (max-width: 1024px) {
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding: 1rem;

      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-thumb {
        background: #96a0b9;
        border-radius: 50px;
      }
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.searchVideosContainer.linear_2};
`;

export { StyledSection, IconContainer };

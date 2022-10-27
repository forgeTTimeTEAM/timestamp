import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 1.5rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.2rem;

    @media screen and (max-width: 1024px) {
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
  color: #d3e0f0;
`;

export { StyledSection, IconContainer };

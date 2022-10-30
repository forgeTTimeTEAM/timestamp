import styled from "styled-components";

const FigureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  div {
    max-width: 90%;
  }

  p {
    font-family: "Inter";
    text-align: center;
    color: ${({ theme }) => theme.searchVideosContainer.linear_2};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p ~ p {
    font-family: "Poppins";
    text-align: center;
    color: ${({ theme }) => theme.fillHeader};
    font-size: 0.75rem;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 686px) {
    flex-direction: row;
    padding: 0.5rem 0.5rem;

    div {
      max-width: 70%;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.3rem;
    }

    p ~ p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }

    p ~ p {
      font-size: 1.1rem;
    }
  }
`;

export { FigureContainer };

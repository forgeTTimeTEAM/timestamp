import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;

  .container {
    padding: 15px;

    .elements {
      display: flex;
      justify-content: center;
      gap: 16px;

      position: relative;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 2rem;
      flex: 1;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  button {
    @media (min-width: 400px) {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export { HeaderContainer };

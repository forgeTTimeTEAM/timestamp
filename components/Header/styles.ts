import styled from "styled-components";
import { ITheme } from "../../styles/theme/interface";

interface IHeaderProps {
  dashboard?: boolean;
  theme: ITheme;
}

const HeaderContainer = styled.header<IHeaderProps>`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;

  .container {
    padding: 15px;

    .elements {
      height: 3rem;

      display: flex;
      justify-content: space-between;
      gap: 16px;

      position: relative;

      @media (min-width: 768px) {
        justify-content: center;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 2rem;
      flex: 1;

      display: ${({ dashboard }) => (dashboard ? "none" : "initial")};

      @media (min-width: 480px) {
        display: initial;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .sideElement {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      border-radius: 1rem;

      position: relative;

      background-color: red;
      input {
        background-color: transparent;

        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        padding: 15px;

        position: relative;
        z-index: 1;

        &:focus,
        &.Active {
          min-width: 170px;
          width: 20vw;
        }
      }

      svg {
        z-index: 0;
        margin-right: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;

        position: absolute;
        right: 0;
      }
    }

    figure {
      height: 2rem;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      overflow: hidden;

      position: relative;
    }

    @media (min-width: 768px) {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export { HeaderContainer };

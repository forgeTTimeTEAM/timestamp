import styled from "styled-components";

import { IStyledHeaderProps } from "./interface";

const HeaderContainer = styled.header<IStyledHeaderProps>`
  color: ${({ theme }) => theme.font_color_primary};
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
    color: ${({ theme }) => theme.fillHeader};

    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-family: "Nunito";
      font-size: 2rem;
      font-weight: bold;
      flex: 1;

      display: ${({ dashboard }) => (dashboard ? "none" : "initial")};
      letter-spacing: 2px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.color_logo_left} 45%,
        ${({ theme }) => theme.color_logo_right} 45%
      );
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 525px) {
        display: initial;
      }
    }

    svg {
      height: 2rem;
    }
  }

  .sideElement {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & > div {
      background: ${({ theme }) => theme.bg_button};
      color: ${({ theme }) => theme.bg_linear_2};
      display: flex;
      justify-content: flex-end;
      align-items: center;

      border-radius: 1rem;

      position: relative;

      input {
        background-color: transparent;

        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        padding: 15px;

        position: relative;
        z-index: 1;

        transition: all 0.7s;

        cursor: pointer;

        &:focus,
        &.Active {
          font-family: "Inter";
          cursor: text;

          padding-right: 2.02rem;

          outline-color: ${({ theme }) => theme.bg_linear_1};
          width: 12.5rem;
        }
      }

      svg {
        z-index: 0;
        margin-right: 0.25rem;
        width: 1.3rem;
        height: 1.3rem;

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

    .vercel {
      background-color: transparent;
      cursor: pointer;

      svg {
        color: #ffffff;
        font-size: 1.5rem;
      }
    }
  }
`;

export { HeaderContainer };

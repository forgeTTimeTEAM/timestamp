import styled, { css, keyframes } from "styled-components";
import { ITheme } from "../../../styles/theme/interface";

interface IStyledContainer {
  theme: ITheme;
  withIcon: number;
  active: boolean;
  hasLabel: boolean;
  hasError: boolean;
}

const move = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const StyledContainer = styled.div<IStyledContainer>`
  color: ${(props) => props.theme.font_color_second};

  height: calc(
    1rem + 32px
      ${({ hasLabel, hasError }) => {
        let height = hasLabel ? " + 1rem + 3px" : "";
        height += hasError ? " + 0.875rem + 3px" : "";
        return height;
      }}
  );

  .inputContainer {
    display: flex;
    position: relative;
    align-items: flex-end;

    height: calc(1rem + 32px ${({ hasLabel }) => hasLabel && " + 1rem + 3px"});

    label {
      position: absolute;
      z-index: 2;

      transition: 0.5s;

      ${({ theme, active }) =>
        active
          ? css`
              color: ${theme.bg_input};
              transform: translate(0, calc(-1rem - 33px));
            `
          : css`
              transform: translate(15px, -15px);
            `}

      &:has(+ div > input:focus) {
        color: ${(props) => props.theme.bg_input};
        transform: translate(0, calc(-1rem - 33px));
      }
    }

    & > div {
      width: 100%;

      background-color: ${({ theme }) => theme.bg_input};
      border-radius: 0.625rem;

      display: flex;
      align-items: center;

      position: relative;

      input {
        width: 100%;
        border-radius: 0.625rem;
        padding: 15px;
        padding-right: ${({ withIcon }) =>
          withIcon ? `calc(30px + ${withIcon}rem)` : "15px"};

        background-color: transparent;

        font-size: 1rem;

        & + * {
          position: absolute;
          right: 15px;

          width: 1.3rem;
        }

        &:-webkit-autofill {
          ${({ theme }) => css`
            -webkit-text-fill-color: ${theme.font_color_second};
            color: ${theme.font_color_second};
          `};
          -webkit-background-clip: text;
        }
      }
    }
  }

  .errorContainer {
    color: red;
  }
`;

export { StyledContainer };

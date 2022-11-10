import styled, { css } from "styled-components";
import { ITheme } from "../../../styles/theme/interface";

interface IStyledContainer {
  theme: ITheme;
  withIcon: number;
  active: boolean;
  hasLabel: boolean;
  hasError: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  min-height: calc(
    1rem + 32px
      ${({ hasLabel, hasError }) => {
        let height = hasLabel ? " + 1rem + 6px" : "";
        height += hasError ? " + 0.875rem + 16px" : "";
        return height;
      }}
  );
  display: flex;
  flex-direction: column;
  gap: 8px;

  .inputContainer {
    display: flex;
    position: relative;
    align-items: flex-end;

    min-height: calc(
      1rem + 32px ${({ hasLabel }) => hasLabel && " + 1rem + 6px"}
    );

    label {
      font-weight: 600;

      position: absolute;
      z-index: 2;

      transition: 0.5s;

      ${({ theme, active }) =>
        active
          ? css`
              color: ${theme.form.input_label_color};
              transform: translate(6px, calc(-1rem - 36px));
            `
          : css`
              transform: translate(15px, -15px);
            `}

      :has(+ div > input:focus) {
        color: ${({ theme }) => theme.form.input_label_color};
        transform: translate(6px, calc(-1rem - 36px));
      }
    }

    & > div {
      width: 100%;

      background-color: ${({ theme }) => theme.form.bg_input};
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
        font-family: "Inter";

        & + * {
          position: absolute;
          right: 15px;

          width: 1.3rem;
          height: 1.3rem;
        }

        &:-webkit-autofill {
          -webkit-text-fill-color: #c5c7c9;
          color: #c5c7c9;
          ${({ theme }) => css`
            -webkit-box-shadow: 0 0 0 30px ${theme.form.bg_input} inset !important;
          `};
        }
      }
    }
  }

  .errorContainer {
    color: ${({ theme }) => theme.error};
    padding-left: 6px;
  }
`;

export { StyledContainer };

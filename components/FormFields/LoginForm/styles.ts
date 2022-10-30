import styled from "styled-components";
import { ITheme } from "../../../styles/theme/interface";

interface IStyledFormProps {
  theme: ITheme;
}

const StyledForm = styled.form<IStyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .seeButton {
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  & > button {
    background-color: ${({ theme }) => theme.form.bg_input};
    padding: 15px 50px;
    border-radius: 3.125rem;

    font-size: 1.125rem;
    font-weight: 800;
  }
`;

export { StyledForm };

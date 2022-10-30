import styled from "styled-components";
import { ITheme } from "../../../styles/theme/interface";

interface IStyledFormProps {
  theme: ITheme;
}

const StyledForm = styled.form<IStyledFormProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
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
    background-color: ${({ theme }) => theme.fill};
    color: ${({ theme }) => theme.form.font_submit};

    padding: 15px 50px;
    border-radius: 3.125rem;

    font-weight: 800;
  }
`;

export { StyledForm };

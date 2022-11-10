import styled from "styled-components";
import { StyledForm } from "../Form/styles";

const StyledSignUpForm = styled(StyledForm)`
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > div:nth-last-child(1) {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    button {
      background-color: ${({ theme }) => theme.form.bg_input};
      padding: 15px 40px;
      border-radius: 3.125rem;
      flex: 1;

      font-size: 1.125rem;
      font-weight: 800;
    }
  }
`;

export { StyledSignUpForm };

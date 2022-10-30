import styled from "styled-components";
import { ITheme } from "./theme/interface";

interface IStyledLoginPageProps {
  theme: ITheme;
}

const StyledLoginPage = styled.div`
  color: #c5c7c9;

  main {
    width: 100%;
    max-width: 600px;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    h3 {
      background-color: ${({ theme }) => theme.form.bg_input};
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.5rem;
      font-weight: 700;
    }

    form {
      padding: 30px;
    }
  }
`;

export { StyledLoginPage };

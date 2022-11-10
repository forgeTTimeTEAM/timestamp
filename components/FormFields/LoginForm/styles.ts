import styled from "styled-components";
import { StyledForm } from "../Form/styles";

const StyledLoginForm = styled(StyledForm)`
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .seeButton {
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export { StyledLoginForm };

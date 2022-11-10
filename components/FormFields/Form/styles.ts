import styled from "styled-components";
import Form from ".";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;

  button[type="submit"] {
    background-color: ${({ theme }) => theme.form.bg_input};
    padding: 15px 50px;
    border-radius: 3.125rem;

    font-size: 1.125rem;
    font-weight: 800;
  }
`;

export { StyledForm };

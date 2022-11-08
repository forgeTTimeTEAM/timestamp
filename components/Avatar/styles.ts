import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

const StyledTrigger = styled(DropdownMenu.Trigger)`
  background-color: ${({ theme }) => theme.fill};
  color: ${({ theme }) => theme.fillHeader};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;

  & > span {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

const StyledContent = styled(DropdownMenu.Content)`
  background-color: ${({ theme }) => theme.bg_button};
  color: ${({ theme }) => theme.fill};
  border-radius: 10px;
  padding: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  button {
    border-radius: 10px;
    padding: 5px 10px;

    &:hover {
      outline: initial;
      background-color: ${({ theme }) => theme.fill};
      color: ${({ theme }) => theme.bg_button};
    }
  }

  div {
    background-color: ${({ theme }) => theme.fill};
    height: 1px;
    width: 80%;
    margin: auto;
  }

  svg {
    fill: ${({ theme }) => theme.bg_button};
  }
`;

export { StyledTrigger, StyledContent };

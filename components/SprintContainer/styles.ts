import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 1px solid red;
  margin: 0 auto;
  padding: 5px 5px;

  .header {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px 2%;
    font-size: 1.75rem;
    font-weight: 700;
    background-color: #D3E0F0;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
`
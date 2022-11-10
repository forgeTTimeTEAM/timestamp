import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #0f2d51;
  border-radius: 5px;

  .header {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 2%;
    font-size: 1.75rem;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    color: white;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 510px;
  padding: 5px 15px 10px 15px;
`;

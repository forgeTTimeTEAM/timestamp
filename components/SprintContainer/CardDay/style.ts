import styled from "styled-components";

const LiCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  padding: 20px 15px;
  color: #232A43;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;

  p {
    margin-left: 10px;
  }
`;

const DivDetails = styled.div`
  display: flex;
  margin: 0;

  p {
    text-align: center;
    width: 100%;
    color: #232A43;
    font-size: 20px;
  }
`

export {LiCard, DivDetails};
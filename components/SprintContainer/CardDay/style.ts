import styled from "styled-components";

const LiCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  padding: 20px 15px;
  color: white;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;

  svg {
    transition: 0.3s;
  }

  svg.open {
    transform: rotate(90deg);
  }

  p {
    margin-left: 10px;
  }
`;

const DetailsUl = styled.ul`
  display: flex;
  margin: 0;
  cursor: pointer;
  flex-direction: column;

  li {
    text-align: center;
    width: 100%;
    font-size: 20px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`

export { LiCard, DetailsUl };
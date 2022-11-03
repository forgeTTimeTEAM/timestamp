import styled from "styled-components";

const LiCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: fit-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  padding: 20px 0px;
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
  align-items: center;
  width: 90%;

  li {
    text-align: center;
    width: 90%;
    font-size: 20px;
    color: white;
    padding: 10px 0 10px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: 0 0 5px 5px;

    &:hover {
      box-shadow: none;
      font-weight: bold;
      background: linear-gradient(
        0deg,
        rgba(14, 41, 73, 1) 0%,
        rgba(0, 20, 83, 0) 100%
      );
      transition: 2s ease-out;
    }
  }
`;

export { LiCard, DetailsUl };

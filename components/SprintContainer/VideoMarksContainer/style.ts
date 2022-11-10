import styled from "styled-components";

const ConainerMarksVideo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 30px;
  border-radius: 5px;

  video {
    border-radius: 5px;
    width: 65%;
    height: 100%;
  }
`;

const AsideMarcks = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 15px;
  border-radius: 5px;

  h1 {
    border-radius: 5px 5px 0 0;
    background-color: #0f2d51;
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 5px 0 5px 0;
  }

  ul {
    font-family: "Nunito";
    width: 100%;
    height: 100%;
    border-radius: 0 0 5px 5px;
    background-color: rgba(15, 45, 81, 0.5);
    flex-direction: column;
    padding: 20px 2%;
    overflow-y: scroll;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 800;
      cursor: pointer;

      p {
        display: flex;
        width: 30%;
        font-size: 0.8rem;
        justify-content: center;
        padding: 10px 5px;
        background: #555d76;
        color: #ffffff;
        border-radius: 5px 0 0 5px;
      }

      span {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #bcc3d9;
        color: #0f2d51;
      }

      .markOptions {
        width: 30%;
        border-radius: 0 5px 5px 0;
      }
    }
  }
`;

export { ConainerMarksVideo, AsideMarcks };

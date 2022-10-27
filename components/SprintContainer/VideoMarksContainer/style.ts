import styled from "styled-components";

const ConainerMarksVideo = styled.div`
  display: flex;
  flex-direction: row;
  background-color:  rgba(255, 255, 255, 0.3);
  padding: 30px;
  border-radius: 5px;

  video {
    border-radius: 5px;
    width: 65%;
    height: 100%;
  }
`

const AsideMarcks = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 15px;
  border-radius: 5px;

  h1 {
    border-radius: 5px 5px 0 0;
    background-color: #0F2D51;
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1.875rem;
  }

  ul {
    width: 100%;
    height: 100%;
    border-radius: 0 0 5px 5px;
    background-color: rgba(15, 45, 81, 0.5);
  }
`

export { ConainerMarksVideo, AsideMarcks }
import styled from "styled-components";

const VideoSearchContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 2.5rem auto;
  background-color: rgba(35, 42, 67, 1);
  border-radius: 10px;
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);

  .videosList {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2rem;
    padding: 1.5rem;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #767a89;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #2e294e;
      border-radius: 20px;
      border: 3px solid #767a89;
    }
  }
`;
export { VideoSearchContainer };

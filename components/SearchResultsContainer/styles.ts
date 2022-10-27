import styled from "styled-components";

import { IJustifyContentProps } from "./interface";

const VideoSearchContainer = styled.section<IJustifyContentProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ searcheredVideosLength }) =>
    searcheredVideosLength === 0 ? "center" : "start"};
  width: 85%;
  height: 16rem;
  margin: 2.5rem 0;
  border-radius: 4px;
  border-left: 10px groove #345995;
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);

  .videosList {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2rem;
    padding: 2.25rem 1rem;
    overflow: auto;

    ::-webkit-scrollbar {
      height: 10px;
      width: 1px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0 16px 16px 0;

      background-image: linear-gradient(to right, #0f2d51, #d3e0f0);
      background-size: 300% 100%;
    }
  }
`;
export { VideoSearchContainer };

import styled from "styled-components";

import { IStyledVideoListProps } from "./interface";

const VideoSearchContainer = styled.section<IStyledVideoListProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ searcheredVideosLength }) =>
    searcheredVideosLength === 0 ? "center" : "start"};
  width: 80%;
  height: 16rem;
  margin: 2.5rem 0;
  border-radius: 4px;
  border-left: 10px groove
    ${({ theme }) => theme.searchVideosContainer.border_left};
  box-shadow: 15px 5px 15px 15px ${({ theme }) => theme.transparent_gray};

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

      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.searchVideosContainer.linear_1},
        ${({ theme }) => theme.searchVideosContainer.linear_2}
      );
      background-size: 300% 100%;
    }
  }
`;
export { VideoSearchContainer };

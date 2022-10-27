import styled from "styled-components";

const VideoContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 15rem;
    height: 11rem;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 500ms;
    border-radius: 8px;

    & > div > div {
        transition: 0.8s;
    }

    :hover {
        border: 2px ridge #d3e0f0;

        .videoThumb {
            transition: 1.5s;
            background-color: #d3e0f0;
        }

        & > div > div {
            border-left: 3rem solid #232a43;
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

    .videoThumb {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 11rem;
        height: 100%;
        background-color: #767a89;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

        div {
            width: 0;
            height: 0;
            border-top: 2rem solid transparent;
            border-bottom: 2rem solid transparent;
            border-left: 3rem solid #d3e0f0;
            border-radius: 4px;
        }
    }

    .videoMarksContainer {
        width: 100%;
        padding: 0.5rem 1.5rem;
        background-color: #11172b;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #767a89;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #232a43;
            border-radius: 20px;
            border: 3px solid #767a89;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 0.8rem;
            width: 100%;

            h4 {
                font-family: "Roboto mono";
                font-size: clamp(0.7rem, 0.6rem, 1.2rem);

                color: #d3e0f0;
            }

            span {
                font-family: "Nunito";
                font-size: clamp(0.6rem, 0.8rem, 1.3rem);

                color: #4a5f8e;
            }
        }
    }
`;

export { VideoContainer };

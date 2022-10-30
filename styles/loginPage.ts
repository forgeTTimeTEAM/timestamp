import styled, { keyframes } from "styled-components";
import { ITheme } from "./theme/interface";

interface IStyledLoginPageProps {
  theme: ITheme;
}

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const wind = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-3deg);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: inherit;
  }
`;

const StyledLoginPage = styled.div<IStyledLoginPageProps>`
  color: #c5c7c9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
  }

  & > section {
    flex: 1;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    main {
      background-color: ${({ theme }) => theme.form.container};
      flex: 1;

      width: 100%;
      max-width: 400px;
      height: max-content;
      margin: 0 auto;

      border-radius: 25px;
      overflow: hidden;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);

      h3 {
        background-color: ${({ theme }) => theme.form.bg_input};
        height: 3.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.5rem;
        font-weight: 700;
      }

      form {
        padding: 30px;
      }
    }

    aside {
      color: ${({ theme }) => theme.fill};
      display: none;
      margin: auto;
      width: 100%;
      max-width: 40vw;

      @media (min-width: 769px) {
        display: initial;
      }

      svg:not(.intro_svg__animated) .intro_svg__animable {
        opacity: 0;
      }
      svg.intro_svg__animated .intro_svg__background {
        animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
            ${slideDown},
          1.5s Infinite linear ${wind};
        animation-delay: 0s, 1s;
      }
      svg.intro_svg__animated .intro_svg__shadow {
        animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) ${fadeIn};
        animation-delay: 0s;
      }
      svg.intro_svg__animated .intro_svg__video {
        animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) ${slideUp},
          1.5s Infinite linear ${wind};
        animation-delay: 0s, 1s;
      }
      svg.intro_svg__animated .intro_svg__character {
        animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) ${fadeIn};
        animation-delay: 0s;
      }
    }
  }
`;

export { StyledLoginPage };

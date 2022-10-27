import styled from "styled-components";

const DashboardContainer = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.dashboard.deg},
    ${(props) => props.theme.dashboard.linear2},
    ${(props) => props.theme.dashboard.linear1},
    ${(props) => props.theme.dashboard.linear2}
  );

  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export { DashboardContainer, MainContainer };

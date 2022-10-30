import styled from "styled-components";

const DashboardContainer = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.dashboard.deg},
    ${({ theme }) => theme.dashboard.linear3},
    ${({ theme }) => theme.dashboard.linear2},
    ${({ theme }) => theme.dashboard.linear1}
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

import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import MainDashboard from "./Main/MainDashboard";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <SideBar />
      <NavBar />
      <MainDashboard />
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  width: 100vw;
`;

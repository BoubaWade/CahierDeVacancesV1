import styled from "styled-components";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Level from "./Main/Level/Level";
import Todo from "./Main/ToDo/Todo";

export default function Dashboard() {
  return (
    <DashboardStyled>
      <SideBar />
      <NavBar />
      <main>
        {true && <Level />}
        {false && <Todo />}
      </main>
    </DashboardStyled>
  );
}
const DashboardStyled = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    position: relative;
    width: calc(100% - 230px);
    height: calc(100vh - 60px);
    top: 60px;
    left: 230px;
    transition: all 0.3s ease;

    background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
      radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
  }
`;

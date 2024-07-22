import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import MainHomeDashboard from "./Home/MainHomeDashboard";
import Level from "./Level/Level";
import Todo from "./ToDo/ToDo";
import Settings from "./Settings/Settings";
import ChoiceLevel from "./ChoiceLevel/ChoiceLevel";

export default function MainDashboard() {
  const {
    isModalChoiceLevelActive,
    isHomeActive,
    isClassesActive,
    isToDoActive,
    isSettingsActive,
  } = useSelector((state: RootState) => state.dashboardSettings);

  return (
    <MainDashboardStyled>
      {isHomeActive && <MainHomeDashboard />}
      {isClassesActive && <Level />}
      {isToDoActive && <Todo />}
      {isSettingsActive && <Settings />}
      {isModalChoiceLevelActive && <ChoiceLevel />}
    </MainDashboardStyled>
  );
}

const MainDashboardStyled = styled.main`
  position: relative;
  width: calc(100% - 230px);
  height: calc(100vh - 60px);
  top: 60px;
  left: 230px;
  transition: all 0.3s ease;
  overflow-x: hidden;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;

  @media (max-width: 1024px) {
    width: calc(100% - 180px);
    left: 180px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

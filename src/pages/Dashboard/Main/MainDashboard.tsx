import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../app/store";
import MainHomeDashboard from "./Home/MainHomeDashboard";
import Level from "./Level/Level";
import Todo from "./ToDo/ToDo";
import Settings from "./Settings/Settings";
import { MenuSelect } from "react-menu-dropdown-list";
import { setMainDashboardActive } from "../../../features/Dashboard/dashboardSettingsSlice";
import { optionsLevelChoice } from "../../../data/datasConfig";
import {
  setChaptersOfLevel,
  setLevel,
  setToDoExercisesByLevel,
} from "../../../features/Dashboard/dashboardSlice";
import {
  getChaptersOfLevel,
  getTodosByLevel,
} from "../../../utils/utilsFunctions";
import { datasOfChapters } from "../../../data/dataLevelPages";

export default function MainDashboard() {
  const {
    isModalChoiceLevelActive,
    isHomeActive,
    isClassesActive,
    isToDoActive,
    isSettingsActive,
  } = useSelector((state: RootState) => state.dashboardSettings);
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const handleSelectLevel = (option: string) => {
    dispatch(setMainDashboardActive("isHomeActive"));
    const todosByLevel = getTodosByLevel(toDoExercises, option);
    dispatch(setToDoExercisesByLevel(todosByLevel));

    const chaptersOfLevel = getChaptersOfLevel(datasOfChapters, option);
    dispatch(setChaptersOfLevel(chaptersOfLevel));
    dispatch(setLevel(option));
  };

  return (
    <MainDashboardStyled>
      {isHomeActive && <MainHomeDashboard />}
      {isClassesActive && <Level />}
      {isToDoActive && <Todo />}
      {isSettingsActive && <Settings />}

      {isModalChoiceLevelActive && (
        <div className="level-choice-container">
          <MenuSelect
            options={optionsLevelChoice}
            onSelect={handleSelectLevel}
            classNameContainer="menu-select-container"
            classNameButton="menu-select-button"
            classNameList="menu-select-list"
            classNameItem="menu-select-list-item"
          />
        </div>
      )}
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
  .level-choice-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    justify-content: center;
    .menu-select-container {
      width: 250px;
      height: 35px;
      margin-top: 200px;
      border: none;
      .menu-select-button {
        height: 35px;
        background: #fde047;
        font-size: 1rem;
        font-weight: 500;
      }
      .menu-select-list {
        max-height: none;
        height: 223px;
        border-radius: 5px;
        border: none;
        border-top: 1px dashed rgba(0, 0, 0, 0.8);
        .menu-select-list-item {
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          padding: 7px;
          transition: 0.4s ease;
          &:hover {
            background: #c2a205;
            transform: scale(1.1);
          }
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: calc(100% - 180px);
    left: 180px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

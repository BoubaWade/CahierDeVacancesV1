import styled from "styled-components";
import {
  setChaptersOfLevel,
  setLevel,
  setToDoExercisesByLevel,
} from "../../../../features/Dashboard/dashboardSlice";
import {
  getChaptersOfLevel,
  getTodosByLevel,
} from "../../../../utils/functions";
import { MenuSelect } from "react-menu-dropdown-list";
import { RootState } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setMainDashboardActive } from "../../../../features/Dashboard/dashboardSettingsSlice";
import { optionsLevelChoice } from "../../../../data/datasConfig";
import { datasOfChapters } from "../../../../data/dataLevelPages";

export default function ChoiceLevel() {
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();

  const handleSelectLevel = (option: string) => {
    const todosByLevel = getTodosByLevel(toDoExercises, option);
    dispatch(setToDoExercisesByLevel(todosByLevel));
    dispatch(setMainDashboardActive("isHomeActive"));

    const chaptersOfLevel = getChaptersOfLevel(datasOfChapters, option);
    dispatch(setChaptersOfLevel(chaptersOfLevel));
    dispatch(setLevel(option));
    localStorage.setItem("level", option);
  };

  return (
    <ChoiceLevelStyled className="level-choice-container">
      <MenuSelect
        options={optionsLevelChoice}
        onSelect={handleSelectLevel}
        classNameContainer="menu-select-container"
        classNameButton="menu-select-button"
        classNameList="menu-select-list"
        classNameItem="menu-select-list-item"
      />
    </ChoiceLevelStyled>
  );
}
const ChoiceLevelStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  .cancel-button {
    width: 120px;
    height: 30px;
    font-size: 0.75rem;
    padding: 5px;
    margin: 100px auto 0;
  }
  .menu-select-container {
    width: 250px;
    height: 35px;
    margin: 150px auto 0;
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
`;

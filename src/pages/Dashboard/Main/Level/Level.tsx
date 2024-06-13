import styled from "styled-components";
import LevelCardList from "./LevelCardList";
import LevelChaptersList from "./LevelChaptersList";
import { useReducer } from "react";
import { LevelState } from "../../../../Types/layoutTypes";
import ExamplesExercises from "./ExamplesExercises";

type Action = {
  type: string;
  payload: string;
};
const initialLevelState = {
  isCm2Active: false,
  isTroisiemeActive: true,
  isPremiereActive: false,
  isTerminaleActive: false,
};

function levelReducer(state: LevelState, action: Action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        isCm2Active: false,
        isTroisiemeActive: false,
        isPremiereActive: false,
        isTerminaleActive: false,
        [action.payload]: true,
      };
    default:
      return state;
  }
}

export default function Level() {
  const [state, dispatch] = useReducer(levelReducer, initialLevelState);

  return (
    <LevelStyled>
      <LevelCardList state={state} dispatch={dispatch} />
      <LevelChaptersList state={state} />
      <ExamplesExercises state={state} />
    </LevelStyled>
  );
}
const LevelStyled = styled.div`
  width: 90%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 0.8fr 1.2fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

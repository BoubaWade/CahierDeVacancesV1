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
  isSixiemeActive: false,
  isCinquiemeActive: false,
  isQuatriemeActive: false,
  isTroisiemeActive: true,
  isSecondeActive: false,
  isPremiereActive: false,
  isTerminaleActive: false,
};

function levelReducer(state: LevelState, action: Action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        isSixiemeActive: false,
        isCinquiemeActive: false,
        isQuatriemeActive: false,
        isTroisiemeActive: false,
        isSecondeActive: false,
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
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

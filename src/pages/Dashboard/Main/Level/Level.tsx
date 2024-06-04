import styled from "styled-components";
import LevelCardList from "./LevelCardList";
import LevelChaptersList from "./LevelChaptersList";
import { useReducer } from "react";
import { LevelState } from "../../../../Types/layoutTypes";

type Action = {
  type: string;
  payload: string;
};
const initialLevelState = {
  isCm2Active: false,
  isTroisiemeActive: false,
  isPremiereActive: false,
  isTerminaleActive: true,
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
    </LevelStyled>
  );
}
const LevelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

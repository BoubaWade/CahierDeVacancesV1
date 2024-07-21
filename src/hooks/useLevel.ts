import { useReducer } from "react";
import { LevelState } from "../Types/layoutTypes";

type Action = {
  type: string;
  payload: string;
};
export default function useLevel() {
  const initialLevelState = {
    isSixiemeActive: false,
    isCinquiemeActive: false,
    isQuatriemeActive: false,
    isTroisiemeActive: false,
    isSecondeActive: false,
    isPremiereActive: false,
    isTerminaleActive: false,
  };

  const levelReducer = (state: LevelState, action: Action) => {
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
  };
  const [state, dispatch] = useReducer(levelReducer, initialLevelState);

  return { state, dispatch };
}

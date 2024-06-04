import homeUser from "../assets/icons/homeUser.svg";
import layerGroup from "../assets/icons/layerGroup.svg";
import circleCheck from "../assets/icons/circleCheck.svg";
import settings from "../assets/icons/settings.svg";
import { useReducer } from "react";
import { SideBarState } from "../Types/layoutTypes";

type Action = {
  type: string;
  payload: string;
};

const initialState = {
  isHomeActive: true,
  isClassesActive: false,
  isToDoActive: false,
  isSettingsActive: false,
};

function reducer(state: SideBarState, action: Action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        isHomeActive: false,
        isClassesActive: false,
        isToDoActive: false,
        isSettingsActive: false,
        [action.payload]: true,
      };
    default:
      return state;
  }
}

export default function useSideBar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isHomeActive, isClassesActive, isToDoActive, isSettingsActive } =
    state;
  const menuItems = [
    {
      isActive: isHomeActive,
      stateKey: "isHomeActive",
      icon: homeUser,
      label: "Accueil",
    },
    {
      isActive: isClassesActive,
      stateKey: "isClassesActive",
      icon: layerGroup,
      label: "Classes",
    },
    {
      isActive: isToDoActive,
      stateKey: "isToDoActive",
      icon: circleCheck,
      label: "Liste des devoirs",
    },
    {
      isActive: isSettingsActive,
      stateKey: "isSettingsActive",
      icon: settings,
      label: "Réglages",
    },
  ];

  return { menuItems, dispatch };
}

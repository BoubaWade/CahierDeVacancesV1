import homeUser from "../assets/icons/homeUser.svg";
import layerGroup from "../assets/icons/layerGroup.svg";
import circleCheck from "../assets/icons/circleCheck.svg";
import settings from "../assets/icons/settings.svg";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function useSideBar() {
  const { isHomeActive, isClassesActive, isToDoActive, isSettingsActive } =
    useSelector((state: RootState) => state.dashboardSettings);

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

  return { menuItems };
}

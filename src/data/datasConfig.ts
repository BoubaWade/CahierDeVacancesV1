import percent from "../assets/percent.svg";
import racine from "../assets/racine.svg";
import infinity from "../assets/infinity-solid.svg";
import functionFI from "../assets/functionFI.svg";
import bgSixieme from "../assets/fibonacci.jpg";
import bg3eme from "../assets/workspace.jpg";
import schooldesk from "../assets/school-desk.jpg";
import emc2 from "../assets/emc2.jpg";
import { LevelState } from "../Types/layoutTypes";

export const optionsLevelChoice = [
  "Choisir une classe",
  "Sixième",
  "Cinquième",
  "Quatrième",
  "Troisième",
  "Seconde",
  "Première",
  "Términale",
];

export const getLevelCardsData = (state: LevelState) => {
  return [
    {
      title: "Sixième",
      isActive: state.isSixiemeActive,
      bgImage: bgSixieme,
      icon: percent,
      navigateTo: "/sixieme",
      handleClickArg: "isSixiemeActive",
    },
    {
      title: "Cinquième",
      isActive: state.isCinquiemeActive,
      bgImage: bgSixieme,
      icon: percent,
      navigateTo: "/cinquieme",
      handleClickArg: "isCinquiemeActive",
    },
    {
      title: "Quatrième",
      isActive: state.isQuatriemeActive,
      bgImage: bgSixieme,
      icon: racine,
      navigateTo: "/quatrieme",
      handleClickArg: "isQuatriemeActive",
    },
    {
      title: "Troisième",
      isActive: state.isTroisiemeActive,
      bgImage: bg3eme,
      icon: racine,
      navigateTo: "/troisieme",
      handleClickArg: "isTroisiemeActive",
    },
    {
      title: "Seconde",
      isActive: state.isSecondeActive,
      bgImage: bg3eme,
      icon: infinity,
      navigateTo: "/seconde",
      handleClickArg: "isSecondeActive",
    },
    {
      title: "Première",
      isActive: state.isPremiereActive,
      bgImage: emc2,
      icon: infinity,
      navigateTo: "/premiere",
      handleClickArg: "isPremiereActive",
    },
    {
      title: "Términale",
      isActive: state.isTerminaleActive,
      bgImage: schooldesk,
      icon: functionFI,
      navigateTo: "/terminale",
      handleClickArg: "isTerminaleActive",
    },
  ];
};

export const optionsFilterByStatus = [
  { label: "Tout", value: "0" },
  { label: "Complet(s)", value: "1" },
  { label: "En attente(s)", value: "2" },
];

// export const levelMenuFilter: { [key: string]: string } = {
//   "11": "Sixième",
//   "12": "Cinquième",
//   "13": "Quatrième",
//   "14": "Troisième",
//   "15": "Seconde",
//   "16": "Première",
//   "17": "Términale",
// };

export type lessonCard = {
  title: string;
  level: string;
  duration: string;
  tag: string;
  stars: string[];
  lessonId: string;
};
export type LevelState = {
  isSixiemeActive: boolean;
  isCinquiemeActive: boolean;
  isQuatriemeActive: boolean;
  isTroisiemeActive: boolean;
  isSecondeActive: boolean;
  isPremiereActive: boolean;
  isTerminaleActive: boolean;
};
export type SideBarState = {
  isHomeActive: boolean;
  isClassesActive: boolean;
  isToDoActive: boolean;
  isSettingsActive: boolean;
};
export type SideBarItem = {
  isActive: boolean;
  stateKey: string;
  icon: string;
  label: string;
};

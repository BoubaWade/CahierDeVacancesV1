import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";

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
  isModalChoiceLevelActive: boolean;
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

type SubOptions = {
  label: string;
  value: string;
};
export type OptionSelect = {
  label: string;
  value: string;
  subOptions?: SubOptions[];
};

export type Level =
  | "Sixième"
  | "Cinquième"
  | "Quatrième"
  | "Troisième"
  | "Seconde"
  | "Première"
  | "Términale";

export type Event =
  | StripeCardNumberElementChangeEvent
  | StripeCardExpiryElementChangeEvent
  | StripeCardCvcElementChangeEvent;

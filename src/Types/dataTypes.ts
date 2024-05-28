export type QuestionSolutions = {
  time: number;
  question: string;
  solution: string[];
};

export type Exercise = {
  number: number;
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

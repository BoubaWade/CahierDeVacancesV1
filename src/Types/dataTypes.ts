export type QuestionSolutions = {
  question: string;
  solution: string[];
};

export type Exercise = {
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

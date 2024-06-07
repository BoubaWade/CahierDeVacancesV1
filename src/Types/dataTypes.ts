export type QuestionSolutions = {
  time: number;
  question: string;
  solution: string[];
};

export type Exercise = {
  id: string;
  level: string;
  lesson: string;
  number: number;
  limitDate: string;
  isCompleted: boolean;
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

export type DatasChapters = {
  id: string;
  level: string;
  lessons: {
    lessonId: string;
    title: string;
    level: string;
    duration: string;
    tag: string;
    stars: string[];
  }[];
}[];

type ValuePiece = Date | null;
export type DateValue = ValuePiece | [ValuePiece, ValuePiece];

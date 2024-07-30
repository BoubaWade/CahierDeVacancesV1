export type RadioOption = {
  label: string;
  value: string;
};
type EditTableHeader = (string | number)[];

export type TableCell = {
  value: string | number;
  locked: boolean;
};

export type QuestionSolutions = {
  time: number;
  question: string[];
  imgName: string;
  graph?: boolean;
  solution: string[];
  radio?: boolean;
  options?: RadioOption[] | undefined;
  editTableHeader?: EditTableHeader;
  editTableData?: TableCell[][];
};

export type Exercise = {
  id: string;
  chapterName: string;
  level: string;
  lesson: string;
  number: number;
  limitDate: string;
  validationDate: string;
  isCompleted: boolean;
  scoreAverage: number;
  statements: string;
  questionsSolutions: QuestionSolutions[];
};

export type Lesson = {
  title: string;
  level: string;
  duration: string;
  tag: string;
  stars: string[];
  lessonId: string;
};

export type Lessons = {
  lessonId: string;
  title: string;
  level: string;
  duration: string;
  tag: string;
  stars: string[];
}[];

export type DatasChapters = {
  id: string;
  level: string;
  lessons: Lessons;
}[];

type ValuePiece = Date | null;
export type DateValue = ValuePiece | [ValuePiece, ValuePiece];

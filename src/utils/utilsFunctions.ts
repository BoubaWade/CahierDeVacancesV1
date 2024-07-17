import { DatasChapters, Exercise, QuestionSolutions } from "../Types/dataTypes";

export const getChaptersOfLevel = (
  datas: DatasChapters,
  level: string
): string[] => {
  const levelDatas = datas.filter((data) => data.id === level);
  const chapters = levelDatas
    ?.map((data) => data.lessons)[0]
    ?.map((data) => data.title);
  return chapters;
};

export function normalizeString(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = String(newDate.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const getImgUrl = (imgName: string) => {
  const imageUrl = imgName
    ? `${import.meta.env.VITE_IMAGES_PATH}${imgName}.png`
    : null;
  if (imageUrl) {
    return imageUrl;
  }
};

export const getCurrentExercise = (
  exercises: Exercise[],
  id: string
): Exercise | undefined => {
  return exercises.find((exercise) => exercise.id === id);
};

export const getTodosCompleted = (todos: Exercise[]): Exercise[] => {
  return todos.filter((todo) => todo.isCompleted);
};

export const getTodosIncompleted = (todos: Exercise[]): Exercise[] => {
  return todos.filter((todo) => !todo.isCompleted);
};

export const setIncompletedProperty = (
  todo: Exercise,
  isIncompleted: boolean
): void => {
  for (let key in todo) {
    if (key === "isCompleted") {
      todo[key] = isIncompleted;
    }
  }
};

export const setLimitDateProperty = (todo: Exercise, date: string): void => {
  for (let key in todo) {
    if (key === "limitDate") {
      todo[key] = date;
    }
  }
};

export const setScoreAverageProperty = (
  todo: Exercise,
  scoreAverage: number
): void => {
  for (let key in todo) {
    if (key === "scoreAverage") {
      todo[key] = scoreAverage;
    }
  }
};

const formatString = (input: string): string => {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

const getSearchIncludesToDo = (todo: Exercise, searchValue: string) => {
  return (
    formatString(todo.lesson).includes(formatString(searchValue)) ||
    formatString(todo.number.toString()).includes(formatString(searchValue)) ||
    formatString(todo.level).includes(formatString(searchValue))
  );
};

const convertToDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split("/").map(Number);
  const fullYear = year + 2000;
  return new Date(fullYear, month - 1, day);
};

export const sortTodosByDate = (todos: Exercise[]) => {
  const todoSorted = structuredClone(todos).sort((a, b) => {
    return (
      convertToDate(a.limitDate).getTime() -
      convertToDate(b.limitDate).getTime()
    );
  });
  return todoSorted;
};

export const filterTodosBySearch = (todos: Exercise[], searchValue: string) => {
  const toDoExercisesToDisplay = todos.filter((todo) =>
    getSearchIncludesToDo(todo, searchValue)
  );
  return toDoExercisesToDisplay;
};

const removeDollarSigns = (expression: string) => {
  if (expression && expression.includes("$")) {
    return expression.replace(/\$/g, "");
  } else {
    return expression;
  }
};
const removeSpaces = (expression: string) => {
  if (expression && expression.includes(" ")) {
    return expression.replace(/\s+/g, "");
  } else {
    return expression;
  }
};

export const extractSolution = (solution: string[]) => {
  const lastLine = solution.slice(solution.length - 1, solution.length)[0];
  const result = removeSpaces(removeDollarSigns(lastLine));
  if (result && result.includes("=")) {
    const solutionSplited = result.split("=");
    if (solutionSplited) {
      const solutionExtracted = solutionSplited[solutionSplited.length - 1];
      return solutionExtracted;
    }
  } else {
    return result;
  }
};

export const getTotalQuestions = (questionsSolutions: QuestionSolutions[]) => {
  const Questions = questionsSolutions
    .map((item) => item.question)
    .map((res) => res.length - 1);
  const totalQuestions = Questions.reduce((curr, acc) => curr + acc);
  return totalQuestions;
};

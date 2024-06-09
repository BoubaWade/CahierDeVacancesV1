import { DatasChapters, Exercise } from "../Types/dataTypes";

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

const formatString = (input: string): string => {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};
export const getSearchIncludesToDo = (todo: Exercise, searchValue: string) => {
  return (
    formatString(todo.lesson).includes(formatString(searchValue)) ||
    formatString(todo.number.toString()).includes(formatString(searchValue)) ||
    formatString(todo.level).includes(formatString(searchValue))
  );
};

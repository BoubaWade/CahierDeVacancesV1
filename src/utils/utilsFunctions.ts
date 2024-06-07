import { DatasChapters } from "../Types/dataTypes";

export const getChaptersOfLevel = (datas: DatasChapters, level: string) => {
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

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = String(newDate.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

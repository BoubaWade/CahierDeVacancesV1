import { Exercise } from "../Types/dataTypes";
import { supabase } from "./config";

export const fetchExercises = async (
  tableName: string,
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>
) => {
  const { data, error } = await supabase.from(tableName).select("*");
  if (error) console.error(error);
  else setExercises(data);
};

export const insertData = async (exercises: Exercise[], tableName: string) => {
  for (const exercise of exercises) {
    const { data, error } = await supabase.from(tableName).insert([
      {
        id: exercise.id,
        chapterName: exercise.chapterName,
        isCompleted: exercise.isCompleted,
        level: exercise.level,
        lesson: exercise.lesson,
        number: exercise.number,
        limitDate: exercise.limitDate,
        statements: exercise.statements,
        questionsSolutions: exercise.questionsSolutions,
      },
    ]);

    if (error) {
      console.error("Erreur lors de l'insertion", error);
    } else {
      console.log("Données insérées", data);
    }
  }
};

export const deleteAllRows = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).delete().neq("id", "");
  if (error) {
    console.error("Erreur lors de la suppression des lignes :", error.message);
  } else {
    console.log("Lignes supprimées :", data);
  }
};

export const handleSignUp = async (
  emailValue: string,
  passwordValue: string,
  nameValue?: string | undefined
) => {
  const { error } = await supabase.auth.signUp({
    email: emailValue,
    password: passwordValue,
    options: {
      data: {
        name: nameValue,
      },
    },
  });
  if (error) {
    console.error(error);
  }
};

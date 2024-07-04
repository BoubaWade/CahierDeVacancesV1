import { Exercise } from "../Types/dataTypes";
import { addToDoExercise } from "../features/Dashboard/dashboardSlice";
import { supabase } from "./config";

export const fetchExercises = async (
  tableName: string,
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>
) => {
  const { data, error } = await supabase.from(tableName).select("*");
  if (error) console.error(error);
  else setExercises(data);
};
//------------------------------------- À SUPPRIMER À LA FIN-------------
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
//---------------------------------------------------------------
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

export const addToDoToDatabase = async (todo: Exercise, user: any) => {
  const todoCloned = structuredClone(todo);
  if (user) {
    const { data: existingTodos, error: fetchError } = await supabase
      .from("todo_exercises")
      .select("*")
      .eq("user_id", user.id)
      .eq("id", todoCloned.id);

    if (fetchError) {
      console.error("Error fetching existing todos:", fetchError);
      return;
    }
    if (existingTodos.length > 0) {
      // Si le todo existe, on le met à jour
      const existingTodoId = existingTodos[0].id;
      const { error } = await supabase
        .from("todo_exercises")
        .update(todoCloned)
        .eq("id", existingTodoId);
      if (error) console.error("Error updating todo:", error);
    } else {
      // Si le todo n'existe pas, on l'ajoute
      const { error } = await supabase
        .from("todo_exercises")
        .insert([{ ...todoCloned, user_id: user.id }]);
      if (error) console.error("Error adding todo:", error);
    }
  }
};

export const getToDosFromDatabase = async (user: any) => {
  if (user) {
    const { data, error } = await supabase
      .from("todo_exercises")
      .select("*")
      .eq("user_id", user.id);
    if (error) console.error("Error geting todos:", error);
    return data;
  }
};

export const deleteToDoFromDatabase = async (user: any, todoId: string) => {
  if (user) {
    const { error } = await supabase
      .from("todo_exercises")
      .delete()
      .eq("id", todoId)
      .eq("user_id", user.id);
    if (error) console.error("Error deleting todo:", error);
  }
};
export const updateToDoDateFromDatabase = async (
  todo: Exercise,
  limitDate: string | undefined,
  user: any
) => {
  const { error } = await supabase
    .from("todo_exercises")
    .update({ limitDate: limitDate })
    .eq("id", todo.id)
    .eq("user_id", user.id);
  if (error) console.error("Error updating todo:", error);
};

export const fetchTodos = async (user: any, dispatch: any) => {
  const todosFromDatabase = await getToDosFromDatabase(user);
  if (todosFromDatabase) {
    for (let todo of todosFromDatabase) {
      dispatch(addToDoExercise(todo));
    }
  }
};

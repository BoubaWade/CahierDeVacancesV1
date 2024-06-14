import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/config";
import { getToDosFromDatabase } from "../supabase/api";
import { addToDoExercise } from "../features/Dashboard/dashboardSlice";

export default function PrivateRoutes() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { isHomeActive, isToDoActive } = useSelector(
    (state: RootState) => state.dashboardSettings
  );
  const [session, setSession] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromDatabase = await getToDosFromDatabase(user);
      if (todosFromDatabase) {
        for (let todo of todosFromDatabase) {
          dispatch(addToDoExercise(todo));
        }
      }
    };

    fetchTodos();
  }, [isHomeActive, isToDoActive]);

  return user || session ? <Outlet /> : <Navigate to="/sign" />;
}

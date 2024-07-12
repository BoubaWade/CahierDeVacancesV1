import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/config";
import { fetchTodos } from "../supabase/api";
import { setUser } from "../features/Sign/authSlice";

export default function PrivateRoutes() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [session, setSession] = useState({});
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        setSession(session);
      } else {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
      fetchTodos(JSON.parse(storedUser), dispatch);
    }
  }, []);

  return user || session ? <Outlet /> : <Navigate to="/sign" />;
}

import { useRef, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/Sign/authSlice";
import { fetchTodos } from "../features/Dashboard/dashboardSlice";
import { setMainDashboardActive } from "../features/Dashboard/dashboardSettingsSlice";
import { supabase } from "../supabase/config";

export default function useSignIn() {
  const [errorCredentials, setErrorCredentials] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        setErrorCredentials("Email ou mot de passe non valide !");
      } else {
        dispatch(setUser(data.user));
        dispatch(fetchTodos(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch(setMainDashboardActive("isModalChoiceLevelActive"));
        navigate("/dashboard");
        if (rememberMe) {
          Cookies.set("rememberMe", "true", { expires: 7 });
          Cookies.set("email", email, { expires: 7 });
          Cookies.set("password", password, { expires: 7 });
        } else {
          Cookies.remove("rememberMe");
          Cookies.remove("email");
          Cookies.remove("password");
        }
      }
    }
  };
  return {
    states: { errorCredentials, rememberMe, emailRef, passwordRef },
    setters: { setErrorCredentials, setRememberMe },
    handlers: { handleSignIn },
  };
}

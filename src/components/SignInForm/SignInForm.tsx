import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabase/config";
import { setUserName } from "../../features/Sign/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import Cookies from "js-cookie";

export default function SignInForm() {
  const [errorCredentials, setErrorCredentials] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedRememberMe = Cookies.get("rememberMe") === "true";
    setRememberMe(storedRememberMe);
    if (storedRememberMe && emailRef.current && passwordRef.current) {
      const storedEmail = Cookies.get("email");
      const storedPassWord = Cookies.get("password");
      if (storedEmail && storedPassWord) {
        emailRef.current.value = storedEmail;
        passwordRef.current.value = storedPassWord;
      }
    }
  }, []);

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
        setErrorCredentials("Email et/ou mot de passe non valide");
      } else {
        const name = data.user.user_metadata.name
          ? data.user.user_metadata.name
          : data.user.email?.split("@")[0];
        dispatch(setUserName(name));
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

  return (
    <SignInFormStyled onSubmit={(e) => handleSignIn(e)}>
      <h1>Connectez-vous</h1>
      <span>Connexion avec email et mot de passe</span>
      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        onChange={() => setErrorCredentials("")}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        ref={passwordRef}
        onChange={() => setErrorCredentials("")}
      />
      <div className="remember-me-container">
        <label htmlFor="rememberMe">Se souvenir de moi</label>
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      <PrimaryButton label="Se connecter" className="connexion-button" />
      {errorCredentials && <span className="error">{errorCredentials}</span>}
      <span className="forget-password">Mot de passe oublié ?</span>
    </SignInFormStyled>
  );
}
const SignInFormStyled = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  h1 {
    margin-bottom: 30px;
  }
  span {
    font-size: 12px;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    background-color: #eee;
    font-size: 13px;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    border-radius: 8px;
    outline: none;
  }
  .remember-me-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    label {
      font-size: 12px;
      margin: 8px 0;
    }
    input {
      width: 10%;
    }
  }
  .connexion-button {
    margin-bottom: 15px;
  }
  .error {
    color: red;
    font-weight: 500;
  }
  .forget-password {
    cursor: pointer;
  }
`;

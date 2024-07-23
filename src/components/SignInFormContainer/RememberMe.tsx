import { useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";

type RememberMeProps = {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function RememberMe({
  emailRef,
  passwordRef,
  rememberMe,
  setRememberMe,
}: RememberMeProps) {
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

  return (
    <RememberMeStyled>
      <label htmlFor="rememberMe">Se souvenir de moi</label>
      <input
        type="checkbox"
        id="rememberMe"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
    </RememberMeStyled>
  );
}
const RememberMeStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  label {
    font-size: 12px;
    margin: 8px 0;
  }
  #rememberMe {
    width: 10%;
  }
`;

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserPassword } from "../supabase/api";

export default function useRestPassword(
  setIsValidate: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newPassword = newPasswordRef?.current?.value;
      const confirmPassword = confirmPasswordRef?.current?.value;

      if (newPassword !== confirmPassword) {
        setErrorPasswordMessage("Les deux champs doivent être identiques !");
        return;
      }
      if (newPassword) {
        await updateUserPassword(newPassword);
        setIsValidate(true);
        setTimeout(() => {
          setIsValidate(false);
          navigate("/sign");
        }, 2000);
      }
      if (newPassword?.length === 0) {
        setErrorPasswordMessage(`Le champs " nouveau mot de passe " est vide.`);
      }
    } catch (error) {
      console.log(error);
      setIsValidate(false);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    states: {
      newPasswordRef,
      confirmPasswordRef,
      isLoading,
      errorPasswordMessage,
    },
    setters: {
      setErrorPasswordMessage,
    },
    handleSubmit,
  };
}

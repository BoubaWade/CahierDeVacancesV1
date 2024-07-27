import { supabase } from "../../supabase/config";
import googleIcon from "../../assets/icons/google_icon.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setUser } from "../../features/Sign/authSlice";
import { fetchTodos } from "../../features/Dashboard/dashboardSlice";
import { setMainDashboardActive } from "../../features/Dashboard/dashboardSettingsSlice";

export default function SignInWithGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // options: {
  //   redirectTo: "http://localhost:5173/dashboard",
  // },
  const handleGoogleSignIn = async () => {
    // await supabase.auth.signInWithOAuth({
    //   provider: "google",
    // });
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
      console.log(data);
      dispatch(setUser(data));
      dispatch(fetchTodos(data));
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(setMainDashboardActive("isModalChoiceLevelActive"));
      // navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInWithGoogleStyled onClick={handleGoogleSignIn}>
      <p>Se connecter avec Google</p>
      <img src={googleIcon} alt="" />
    </SignInWithGoogleStyled>
  );
}
const SignInWithGoogleStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1.5px solid #201f1f;
  padding: 6px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #201f1f;
  color: #f8f8fa;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #f8f8fa;
    color: #201f1f;
    border: 1.5px solid #201f1f;
  }
  img {
    width: 20px;
    margin-left: 10px;
  }
`;

import styled from "styled-components";
import { setUser } from "../../../features/Sign/authSlice";
import logout from "../../../assets/icons/logout.svg";
import { supabase } from "../../../supabase/config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) throw Error;
    dispatch(setUser(null));
    localStorage.removeItem("user");
    localStorage.removeItem("level");
    localStorage.removeItem("total-score");
    navigate("/");
  };

  return (
    <LogoutStyled onClick={() => handleLogOut()}>
      <img src={logout} />
      <span>Déconnexion</span>
    </LogoutStyled>
  );
}
const LogoutStyled = styled.div`
  margin: 120px 0 0 6px;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 14px;
  cursor: pointer;
  img {
    height: 18px;
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    img {
      height: 17px;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0;
    padding: 5px;
    img {
      height: 17px;
      margin-top: 5px;
    }
    span {
      display: none;
    }
  }
`;

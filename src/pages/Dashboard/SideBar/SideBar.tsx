import styled from "styled-components";
import logout from "../../../assets/icons/logout.svg";
import MenuItemsList from "./MenuItemsList";
import { supabase } from "../../../supabase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { setUser } from "../../../features/Sign/authSlice";

export default function SideBar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) throw Error;
    dispatch(setUser(null));
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <SideBarStyled>
      <h2 onClick={() => navigate("/")}>Math-Max</h2>
      <MenuItemsList />
      <div className="logout" onClick={() => handleLogOut()}>
        <img src={logout} />
        Déconnexion
      </div>
    </SideBarStyled>
  );
}

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #c2a205, #fde047);
  width: 230px;
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
  scrollbar-width: none;
  transition: all 0.3s ease;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 1.2rem;
    text-align: center;
    margin: 20px 0 25px;
    cursor: pointer;
  }
  .logout {
    font-size: 0.9rem;
    font-weight: 700;
    padding: 14px;
    margin: 120px 0 0 6px;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
  }
`;

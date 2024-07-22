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
    localStorage.removeItem("level");
    navigate("/");
  };

  return (
    <SideBarStyled>
      <h2 onClick={() => navigate("/")}>Math-Max</h2>
      <MenuItemsList />
      <div className="logout" onClick={() => handleLogOut()}>
        <img src={logout} />
        <span>Déconnexion</span>
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
    margin: 120px 0 0 6px;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 14px;
    cursor: pointer;
    img {
      height: 18px;
      margin-right: 10px;
    }
  }
  @media (max-width: 1024px) {
    width: 180px;
    h2 {
      font-size: 1.1rem;
    }
    .logout {
      font-size: 0.8rem;
      img {
        height: 17px;
      }
    }
  }
  @media (max-width: 768px) {
    background: linear-gradient(to right, #fde047, #c2a205);
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 55px;
    h2 {
      width: 150px;
      margin: 0;
    }
    .logout {
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
  }
`;

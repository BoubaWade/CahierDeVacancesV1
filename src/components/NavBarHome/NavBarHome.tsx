import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsSignInForm } from "../../features/Sign/authSlice";
import { useEffect, useState } from "react";
import LevelsMobile from "./LevelsMobile";
import NavLeft from "./NavLeft";

export default function NavBarHome() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 957);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 957);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      dispatch(setIsSignInForm(true));
      navigate("/sign");
    }
  };

  return (
    <NavBarHomeStyled>
      {isMobile ? <LevelsMobile /> : <NavLeft />}
      <PrimaryButton
        label="Tableau de bord"
        className="dashboard-button"
        onClick={() => handleClick()}
      />
    </NavBarHomeStyled>
  );
}
const NavBarHomeStyled = styled.nav`
  background-color: #000205;
  color: #ffff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  h2 {
    position: relative;
    z-index: 30;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
  }
  .dashboard-button {
    margin-top: 0;
    padding: 8px 20px;
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 1.3rem;
    }
    .dashboard-button {
      font-size: 0.7rem;
      padding: 7px 15px;
    }
  }
  @media (max-width: 957px) {
    justify-content: space-between;
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    .dashboard-button {
      font-size: 0.6rem;
      padding: 7px 10px;
    }
  }
  @media (max-width: 580px) {
    padding: 0 20px;
  }
  @media (max-width: 425px) {
    .dashboard-button {
      font-size: 0.55rem;
      padding: 7px 8px;
    }
  }
`;

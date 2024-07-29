import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsSignInForm } from "../../features/Sign/authSlice";
import Levels from "./Levels";

export default function NavBarHome() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h2>Math.max</h2>
      <Levels />
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
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

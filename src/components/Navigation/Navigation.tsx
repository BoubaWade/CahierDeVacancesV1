import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { datasOfChapters } from "../../data/dataLevelPages";
import BorderBeam from "../reusableUI/BorderBeam";
import PrimaryButton from "../reusableUI/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsSignInForm } from "../../features/Sign/authSlice";

export default function Navigation() {
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
    <NavigationStyled>
      {/* <h2>CAHIER DE VACANCES</h2> */}
      <h2>MATH.Max</h2>
      <ul>
        {datasOfChapters.map(({ id, level }) => (
          <div key={id}>
            <li onClick={() => navigate(`/${id}`)}>{level}</li>
            <BorderBeam className="border-beam" />
          </div>
        ))}
      </ul>
      <PrimaryButton
        label="Tableau de bord"
        className="dashboard-button"
        onClick={() => handleClick()}
      />
    </NavigationStyled>
  );
}
const NavigationStyled = styled.nav`
  background-color: #000205;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  h2 {
    position: relative;
    z-index: 30;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    position: relative;
    padding: 5px;
    li {
      position: relative;
      z-index: 30;
      font-size: 1rem;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        transform: scale(1.1);
      }
    }
    .border-beam {
      z-index: 0;
    }
  }
  .dashboard-button {
    margin-top: 0;
    padding: 8px 20px;
  }
`;

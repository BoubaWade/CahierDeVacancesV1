import styled from "styled-components";
import bell from "../../assets/icons/bell.svg";
import bars from "../../assets/icons/bars.svg";
import SecondaryButton from "../../components/reusableUI/SecondaryButton";
import { useSelector } from "react-redux";
import { getTodosIncompleted } from "../../utils/functions";
import { RootState } from "../../app/store";

export default function NavBar() {
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const userName = user?.user_metadata?.name
    ? user?.user_metadata?.name
    : user?.email?.split("@")[0];

  const todosIncompleted = getTodosIncompleted(toDoExercisesByLevel);
  const numberOfTodosIncomp = todosIncompleted.length;

  return (
    <NavBarStyled>
      <img src={bars} className="bars" />
      <form>
        <div className="form-input">
          <input type="search" placeholder="Recherche..." />
          <SecondaryButton label="Valider" className="search-btn" />
        </div>
      </form>
      <span className="user-name">{userName}</span>
      <div className="notif">
        {numberOfTodosIncomp !== 0 ? (
          <span className="count">{numberOfTodosIncomp}</span>
        ) : null}
        <img src={bell} />
      </div>
    </NavBarStyled>
  );
}
const NavBarStyled = styled.nav`
  width: calc(100% - 230px);
  /* width: 100vw; */
  /* max-width: 1500px; */
  background: linear-gradient(to right, #fde047, #c2a205);
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  grid-gap: 24px;
  position: fixed;
  /* position: sticky; */
  top: 0;
  left: 230px;
  padding-left: 30px;
  z-index: 1000;
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  &::before {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: -45px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 #fde047;
  }
  .bars {
    cursor: pointer;
  }
  form {
    max-width: 400px;
    width: 100%;
    margin-right: auto;
    .form-input {
      display: flex;
      align-items: center;
      height: 38px;
      border-radius: 15px;
      box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
      input {
        flex-grow: 1;
        padding: 0 16px;
        height: 100%;
        border: none;
        border-radius: 15px 0 0 15px;
        border: 1px solid #c2a205;
        outline: none;
        width: 100%;
      }
      .search-btn {
        width: 90px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 400;
        border: none;
        outline: none;
        border-radius: 0 15px 15px 0;
        border: 1px solid #c2a205;
        cursor: pointer;
      }
    }
  }
  .user-name {
    font-weight: 500;
  }
  .notif {
    font-size: 20px;
    position: relative;
    .count {
      position: absolute;
      top: -6px;
      right: -6px;
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      color: #f8f8fa;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 1024px) {
    width: calc(100% - 180px);
    left: 180px;
    height: 55px;
    form {
      .form-input {
        height: 35px;
        input {
          border-radius: 12px 0 0 12px;
        }
        .search-btn {
          border-radius: 0 12px 12px 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

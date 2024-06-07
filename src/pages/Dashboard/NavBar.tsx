import styled from "styled-components";
import bell from "../../assets/icons/bell.svg";
import bars from "../../assets/icons/bars.svg";
import SecondaryButton from "../../components/reusableUI/SecondaryButton";

export default function NavBar() {
  return (
    <NavBarStyled>
      <img src={bars} className="bars" />
      <form>
        <div className="form-input">
          <input type="search" placeholder="Recherche..." />
          <SecondaryButton label="Valider" className="search-btn" />
        </div>
      </form>
      <div className="notif">
        <span className="count">12</span>
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
      input {
        flex-grow: 1;
        padding: 0 16px;
        height: 100%;
        border: none;
        border-radius: 36px 0 0 36px;
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
        border-radius: 0 36px 36px 0;
        border: 1px solid #c2a205;
        cursor: pointer;
      }
    }
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
`;

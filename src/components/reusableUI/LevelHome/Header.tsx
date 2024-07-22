import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";

type HeaderProps = {
  level: string | undefined;
  searchValue: string;
  onChangeValue: (value: string) => void;
};

export default function Header({
  level,
  searchValue,
  onChangeValue,
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <PrimaryButton
        label="Aller au tableau de bord"
        className="dashboard-return-btn"
        onClick={() => navigate("/dashboard")}
      />
      <div className="info">
        <h1>Classe de {level}</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un chapitre de la classe ..."
          value={searchValue}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0 50px;
  justify-content: center;
  text-align: center;
  gap: 25px;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  .dashboard-return-btn {
    height: 33px;
    font-size: 0.8rem;
    padding: 0 15px;
    margin-bottom: 30px;
    border-radius: 5px;
  }
  h1 {
    font-size: 1.9rem;
    position: relative;
    z-index: 1;
  }
  .search {
    position: relative;
    z-index: 1;
    width: 30%;
    min-width: 280px;
    margin-top: 10px;
    input {
      width: 100%;
      padding: 15px 20px;
      border: none;
      border-radius: 2rem;
      box-shadow: 0px 2px 20px -5px rgba(0, 0, 0, 0.55);
      outline: none;
      &:focus {
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
        border: 1.5px solid #c2a205;
      }
    }
  }
`;

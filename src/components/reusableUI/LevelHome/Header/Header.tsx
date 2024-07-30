import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import Search from "./Search";

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
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const userFinded = user || localStorage.getItem("user");

  return (
    <HeaderStyled>
      {userFinded && (
        <PrimaryButton
          label="Aller au tableau de bord"
          className="dashboard-return-btn"
          onClick={() => navigate("/dashboard")}
        />
      )}
      <h1>Classe de {level}</h1>
      <Search searchValue={searchValue} onChangeValue={onChangeValue} />
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
    margin-bottom: 10px;
    border-radius: 5px;
  }
  h1 {
    font-size: 1.9rem;
    position: relative;
    z-index: 1;
    margin-top: 30px;
  }
`;

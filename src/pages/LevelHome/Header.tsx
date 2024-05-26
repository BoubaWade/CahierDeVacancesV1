import styled from "styled-components";

type HeaderProps = {
  level: string | undefined;
};

export default function Header({ level }: HeaderProps) {
  return (
    <HeaderStyled>
      <div className="info">
        <h1>Classe de {level}</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un sujet de votre classe ..."
        />
      </div>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  justify-content: center;
  text-align: center;
  gap: 25px;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  h1 {
    font-size: 1.9rem;
  }
  .search {
    position: relative;
    width: 30%;
    min-width: 280px;
    margin-top: 10px;
    input {
      width: 100%;
      padding: 15px 20px;
      border: none;
      border-radius: 2rem;
      box-shadow: 0px 4px 70px -10px rgba(0, 0, 0, 0.6);
      outline: none;
    }
  }
`;

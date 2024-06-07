import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="welcome">
        <h3>Bonjour Boubacar !</h3>
        <p>Content de vous voir.</p>
      </div>
      <div className="courses-inProgress">
        <span>15</span>
        <p>Exercice(s) restant(s)</p>
      </div>
      <div className="courses-completed">
        <span>12</span>
        <p>Exercice(s) términé(s)</p>
      </div>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  height: 100px;
  justify-content: space-between;
  margin-bottom: 20px;
  .welcome {
    background: #f1f2f3;
    width: 60%;
    width: calc(100% - 250px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
    h3 {
      margin-bottom: 5px;
      font-weight: 600;
    }
    p {
      font-size: 0.9rem;
    }
  }
  .courses-completed,
  .courses-inProgress {
    background: #f1f2f3;
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin-left: 15px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 10px -10px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
    span {
      width: 40%;
      font-size: 1.8rem;
      font-weight: 700;
    }
    p {
      width: 60%;
      font-size: 0.7rem;
      font-weight: 500;
    }
  }
  .courses-completed {
    span {
      color: #4c7f43;
    }
  }
  .courses-inProgress {
    span {
      color: #a80202;
    }
  }
`;

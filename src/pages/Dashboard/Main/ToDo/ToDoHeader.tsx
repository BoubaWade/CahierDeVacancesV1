import styled from "styled-components";

export default function ToDoHeader() {
  return (
    <ToDoHeaderStyled>
      <h4>Liste des devoirs</h4>
      <input type="text" placeholder="Rechercher" />
    </ToDoHeaderStyled>
  );
}
const ToDoHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 10px 20px;
  h4 {
    background: #fff;
    color: #000000c1;
    padding: 5px 20px;
    font-weight: 400;
    border-radius: 20px;
    border: 1px solid #d9d7d7;
  }
  input {
    width: 20%;
    height: 30px;
    padding: 0 10px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #d9d7d7;
    outline: none;
  }
`;

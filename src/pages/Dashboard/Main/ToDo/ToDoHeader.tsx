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
  background: #f1f2f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  h4 {
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

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../../../../app/store";
import { setSearchToDoValue } from "../../../../features/Dashboard/dashboardSlice";

export default function ToDoHeader() {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchToDoValue(e.target.value));
  };

  return (
    <ToDoHeaderStyled>
      <h4>Liste des devoirs</h4>
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => handleChange(e)}
      />
    </ToDoHeaderStyled>
  );
}
const ToDoHeaderStyled = styled.div`
  background: #f1f2f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  h4 {
    padding: 3px 20px;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #d9d7d7;
  }
  input {
    width: 15%;
    min-width: 150px;
    height: 27px;
    padding: 0 10px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #d9d7d7;
    outline: none;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

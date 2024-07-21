import styled from "styled-components";
import HeaderToDoList from "./HeaderToDoList";
import ToDoTable from "./ToDoTable";
import DropDown from "../../../../components/DropDown/DropDown";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import { useEffect, useState } from "react";
import EmptyToDo from "./EmptyToDo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { optionsFilterByStatus } from "../../../../data/datasConfig";
import { handleFilterTodos } from "../../../../utils/utilsFunctions";
import { setTodoFilteredBySelect } from "../../../../features/Dashboard/dashboardSlice";

export default function ToDoList() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const { toDoExercisesByLevel } = useSelector(
    (state: RootState) => state.dashboard
  );
  const dispatch = useDispatch();
  const selectValueOfAllTodos = "0";
  const isTodos = toDoExercisesByLevel.length !== 0;

  const handleSelectChange = async (value: string) => {
    setSelectedValue(value);
    const todoFiltered = handleFilterTodos(toDoExercisesByLevel, value);
    dispatch(setTodoFilteredBySelect(todoFiltered));
  };

  useEffect(() => {
    handleSelectChange(selectValueOfAllTodos);
  }, []);

  return (
    <ToDoListStyled>
      <HeaderToDoList
        options={optionsFilterByStatus}
        selectedValue={selectedValue}
        onChange={handleSelectChange}
      />
      {isTodos ? <ToDoTable /> : <EmptyToDo setIsOpenModal={setIsOpenModal} />}
      <Modal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="modal"
      >
        <DropDown />
      </Modal>
    </ToDoListStyled>
  );
}
const ToDoListStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 95%;
  background: #f1f2f3;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 10px 10px 0 0;
  margin: 30px 0;
  padding-bottom: 3px;
  border: 1px solid #d9d7d7;
  box-shadow: 0px 2px 15px -10px rgba(0, 0, 0, 0.8);
  overflow-x: scroll;
  .modal {
    transform: translateX(115px);
  }
  @media (max-width: 1024px) {
    .modal {
      transform: translateX(60px);
    }
  }
  @media (max-width: 957px) {
    width: 98%;
  }
  @media (max-width: 769px) {
    .modal {
      transform: translateX(0px);
    }
  }
`;

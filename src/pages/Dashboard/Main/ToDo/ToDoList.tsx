import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
// import BorderBeam from "../../../../components/reusableUI/BorderBeam";
import { useSelector } from "react-redux";
import ToDoTable from "./ToDoTable";
import { RootState } from "../../../../app/store";
import DropDown from "../../../../components/DropDown/DropDown";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import { useState } from "react";
import EmptyToDo from "./EmptyToDo";

export default function ToDoList() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { toDoExercises } = useSelector((state: RootState) => state.dashboard);
  const isTodos = toDoExercises.length !== 0;

  return (
    <ToDoListStyled>
      {/* <BorderBeam className="border-beam" /> */}
      <ToDoHeader />
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
  /* min-width: 868px; */
  width: 90%;
  background: #f1f2f3;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 10px 10px 0 0;
  margin: 30px 0;
  padding-bottom: 3px;
  border: 1px solid #d9d7d7;
  box-shadow: 0px 2px 15px -10px rgba(0, 0, 0, 0.8);
  overflow-x: scroll;
  /* .border-beam {
    transform: translate(2px, -2px);
    z-index: -1;
  } */
  .modal {
    transform: translateX(115px);
  }
  @media (max-width: 1300px) {
    width: 95%;
  }
  @media (max-width: 1024px) {
    .modal {
      transform: translateX(60px);
    }
  }
  @media (max-width: 769px) {
    .modal {
      transform: translateX(0px);
    }
  }
  @media (max-width: 957px) {
    width: 98%;
  }
`;

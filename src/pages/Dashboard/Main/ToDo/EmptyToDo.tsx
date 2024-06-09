import styled from "styled-components";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";

type EmptyToDoProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EmptyToDo({ setIsOpenModal }: EmptyToDoProps) {
  return (
    <EmptyToDoStyled>
      <p className="empty-todo">Pas de devoirs à faire !</p>
      <PrimaryButton
        label="Ajouter des devoirs"
        className="empty-button"
        onClick={() => setIsOpenModal(true)}
      />
    </EmptyToDoStyled>
  );
}
const EmptyToDoStyled = styled.div`
  background: #f1f2f3;
  height: 250px;
  text-align: center;
  padding-top: 30px;
  .empty-todo {
    padding-top: 50px;
    font-size: 1rem;
    font-style: italic;
  }
  .empty-button {
    margin-top: 50px;
    padding: 7px 20px;
  }
`;

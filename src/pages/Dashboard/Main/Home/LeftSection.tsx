import styled from "styled-components";
import TodoListRecently from "./TodoListRecently";

type LeftSectionProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftSection({ setIsOpenModal }: LeftSectionProps) {
  return (
    <LeftSectionStyled>
      <TodoListRecently />
      <div className="indication" onClick={() => setIsOpenModal(true)}>
        "Click ici" : pour programmer des devoirs
      </div>
    </LeftSectionStyled>
  );
}

const LeftSectionStyled = styled.div`
  .indication {
    background: #fde047;
    width: calc(100% - 20px);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-weight: 600;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    cursor: pointer;
    &:hover {
      box-shadow: none;
    }
  }
`;

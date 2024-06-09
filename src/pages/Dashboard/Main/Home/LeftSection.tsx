import styled from "styled-components";
import TodoListRecently from "./TodoListRecently";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";

type LeftSectionProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftSection({ setIsOpenModal }: LeftSectionProps) {
  return (
    <LeftSectionStyled>
      <TodoListRecently />
      <PrimaryButton
        label='"Click ici" : pour programmer des devoirs'
        className="indication"
        onClick={() => setIsOpenModal(true)}
      />
    </LeftSectionStyled>
  );
}

const LeftSectionStyled = styled.div`
  .indication {
    width: calc(100% - 20px);
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
  }
`;

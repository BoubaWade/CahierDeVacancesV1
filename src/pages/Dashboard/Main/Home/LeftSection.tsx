import styled from "styled-components";
import TodosRecentlyContainer from "./TodosRecentlyContainer";
import PrimaryButton from "../../../../components/reusableUI/PrimaryButton";

type LeftSectionProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftSection({ setIsOpenModal }: LeftSectionProps) {
  return (
    <LeftSectionStyled>
      <TodosRecentlyContainer />
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
  @media (max-width: 1150px) {
    .indication {
      width: 500px;
    }
  }
`;

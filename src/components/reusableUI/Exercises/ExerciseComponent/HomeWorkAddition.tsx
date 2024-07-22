import styled from "styled-components";
import SecondaryButton from "../../SecondaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { Exercise } from "../../../../Types/dataTypes";

type HomeWorkAdditionProps = {
  totalQuestions: number;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  exercise: Exercise;
};

export default function HomeWorkAddition({
  totalQuestions,
  setIsOpenModal,
  exercise,
}: HomeWorkAdditionProps) {
  const { level } = useSelector((state: RootState) => state.dashboard);

  const levelFounded = level || localStorage.getItem("level");
  if (exercise.level !== levelFounded) return;

  return (
    <HomeWorkAdditionStyled>
      {totalQuestions !== 0 && (
        <SecondaryButton
          label={`Ajouter à : DEVOIR À FAIRE `}
          className="add-homework"
          onClick={() => setIsOpenModal(true)}
        />
      )}
    </HomeWorkAdditionStyled>
  );
}

const HomeWorkAdditionStyled = styled.div`
  .add-homework {
    background-color: #201f1fe7;
    font-size: 0.7rem;
    font-weight: 500;
    margin-top: 20px;
    border-radius: 5px;
    padding: 7px 10px;
    &:hover {
      background-color: #fff;
    }
  }
`;

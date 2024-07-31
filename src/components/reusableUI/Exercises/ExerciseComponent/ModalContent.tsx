import NotSubscribedMessage from "./NotSubscribedMessage";
import { Exercise } from "../../../../Types/dataTypes";
import styled from "styled-components";
import CalendarContainer from "./CalendarContainer";

type ModalContentProps = {
  exercise: Exercise;
  isSubsribted: boolean;
  addIsSuccessful: boolean;
  addTodo: (exercise: Exercise) => void;
};

export default function ModalContent({
  exercise,
  addTodo,
  isSubsribted,
  addIsSuccessful,
}: ModalContentProps) {
  return (
    <ModalContentStyled>
      {isSubsribted ? (
        <CalendarContainer
          exercise={exercise}
          addTodo={addTodo}
          addIsSuccessful={addIsSuccessful}
        />
      ) : (
        <NotSubscribedMessage />
      )}
    </ModalContentStyled>
  );
}
const ModalContentStyled = styled.div`
  margin: 0 auto;
`;

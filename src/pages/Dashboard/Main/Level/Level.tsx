import styled from "styled-components";
import LevelCardList from "./LevelCardList";
import LevelChaptersList from "./LevelChaptersList";
import ExamplesExercises from "./ExamplesExercises";
import useLevel from "../../../../hooks/useLevel";

export default function Level() {
  const { state, dispatch } = useLevel();

  return (
    <LevelStyled>
      <LevelCardList state={state} dispatch={dispatch} />
      <LevelChaptersList state={state} />
      <ExamplesExercises state={state} />
    </LevelStyled>
  );
}
const LevelStyled = styled.div`
  width: 90%;
  margin: 30px auto;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

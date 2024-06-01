import styled from "styled-components";
import LevelCardList from "./LevelCardList";
import CalendarComponent from "../../../../components/reusableUI/CalendarComponent";

export default function Level() {
  return (
    <LevelStyled>
      <LevelCardList />
      <CalendarComponent />
    </LevelStyled>
  );
}
const LevelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background-image: radial-gradient(#2d6a4f 0.75px, transparent 0.75px),
    radial-gradient(#2d6a4f 0.75px, #ffffff 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
`;

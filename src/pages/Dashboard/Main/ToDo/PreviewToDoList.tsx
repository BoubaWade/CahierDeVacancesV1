import styled from "styled-components";
import { getImgUrl } from "../../../../utils/utilsFunctions";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import PreviewToDoQuestions from "./PreviewToDoQuestions";

type PropsType = {
  questionsSolutions: QuestionSolutions[];
  isCompleted: boolean;
};

export default function PreviewToDoList({
  questionsSolutions,
  isCompleted,
}: PropsType) {
  return (
    <PreviewToDoListStyled>
      {questionsSolutions?.map((item, index) => (
        <li key={index}>
          <img src={getImgUrl(item.imgName)} />
          <PreviewToDoQuestions item={item} isCompleted={isCompleted} />
        </li>
      ))}
    </PreviewToDoListStyled>
  );
}
const PreviewToDoListStyled = styled.ul`
  text-align: center;
  li {
    margin: 10px 0;
    img {
      width: 80%;
    }
  }
`;

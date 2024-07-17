import MathJaxComponent from "../../../../components/reusableUI/MathJaxComponent";
// import check from "../../../../assets/icons/check.svg";
// import xmark from "../../../../assets/icons/xmark.svg";
import styled from "styled-components";

type PropsType = {
  item: {
    question: string[];
  };
  isCompleted: boolean;
};

export default function PreviewToDoQuestions({ item, isCompleted }: PropsType) {
  const { question } = item;

  // const icons = successfulResponse ? (
  //   <img src={check} className="icon" />
  // ) : (
  //   <img src={xmark} className="icon" />
  // );

  return (
    <PreviewToDoQuestionsStyled>
      {question.slice(1, question.length).map((line, index) => (
        <li key={index}>
          <MathJaxComponent latex={line} />
          {/* {isCompleted && icons} */}
        </li>
      ))}
    </PreviewToDoQuestionsStyled>
  );
}
const PreviewToDoQuestionsStyled = styled.ul`
  li {
    display: flex;
    .icon {
      width: 15px;
      margin-left: 15px;
    }
  }
`;

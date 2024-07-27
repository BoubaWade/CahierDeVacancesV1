import styled from "styled-components";
import { getImgUrl } from "../../../../utils/utilsFunctions";
import { QuestionSolutions } from "../../../../Types/dataTypes";
import PreviewToDoQuestions from "./PreviewToDoQuestions";
import EditableTable from "../../../../components/reusableUI/EditableTable";

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
          {/* {item.editTableData ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              {item.imgName && (
                <img
                  src={getImgUrl(item.imgName)}
                  className="graphic-edit-table"
                  style={{ width: "30px", height: "50px" }}
                />
              )}
              <EditableTable initialData={item.editTableData} />
            </div>
          ) : (
            <img src={getImgUrl(item.imgName)} />
          )} */}
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

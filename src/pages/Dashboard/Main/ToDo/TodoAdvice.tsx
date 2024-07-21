import styled from "styled-components";

export default function TodoAdvice() {
  const fields = [
    "Réviser les notions fondamentales.",
    "Planifier des sessions de travail régulières.",
    "Faire des exercices variés.",
    "Vérifier vos réponses. ",
  ];

  return (
    <TodoAdviceStyled>
      <h3>Conseils pour être efficace</h3>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </ul>
    </TodoAdviceStyled>
  );
}
const TodoAdviceStyled = styled.div`
  background: #f1f2f3;
  width: 350px;
  padding: 15px;
  border: 1px solid #d9d7d7;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    font-size: 0.85rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
    background: #000;
    color: #f1f2f3;
    padding: 7px 25px;
    border-radius: 6px;
  }
  ul {
    li {
      font-size: 0.85rem;
      font-weight: 500;
      padding: 7px 0;
      list-style-type: disc;
      margin-left: 20px;
    }
  }
`;

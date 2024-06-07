import styled from "styled-components";

export default function TodoListRecently() {
  const todoRecentlyDatas = [
    {
      chapter: "Théorème de Thalès",
      numberOfExercise: 7,
    },
    {
      chapter: "Trigonomètrie",
      numberOfExercise: 1,
    },
    {
      chapter: "Calcul d'aire et de Volume",
      numberOfExercise: 3,
    },
    {
      chapter: "Théorème de Pythagore",
      numberOfExercise: 10,
    },
    {
      chapter: "Calcul Littéral",
      numberOfExercise: 9,
    },
  ];
  return (
    <TodoListRecentlyStyled>
      <h3>Récents devoirs</h3>
      <ul>
        {todoRecentlyDatas.map((data, index) => (
          <li key={index}>
            <span>{data.chapter}</span>
            <span>Exercice: {data.numberOfExercise}</span>
          </li>
        ))}
      </ul>
    </TodoListRecentlyStyled>
  );
}
const TodoListRecentlyStyled = styled.div`
  width: 460px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  transition: all 300ms ease;
  &:hover {
    box-shadow: none;
  }
  h3 {
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 20px;
  }
  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px;
      span {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
`;

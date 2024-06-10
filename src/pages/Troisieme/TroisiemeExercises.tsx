import { exercisesTroisieme } from "../../Datas/Troisieme/exercises";
import Exercises from "../../components/reusableUI/Exercises/Exercises";
import { useParams } from "react-router-dom";

export default function TroisiemeExercises() {
  const { param } = useParams();

  const datasExercise = exercisesTroisieme.filter(
    (exercise) => exercise.chapterName === param
  );

  return (
    <div>
      <Exercises exercises={datasExercise} />
    </div>
  );
}

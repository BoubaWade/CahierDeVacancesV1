// import { exercisesTroisieme } from "../../Datas/Troisieme/exercises";
import { Exercise } from "../../Types/dataTypes";
import Exercises from "../../components/reusableUI/Exercises/Exercises";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchExercises } from "../../supabase/api";
import Loader from "../../components/reusableUI/Loader";

export default function TroisiemeExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const { param } = useParams();

  useEffect(() => {
    fetchExercises("troisieme_exercises", setExercises);
  }, []);

  if (exercises.length === 0) return <Loader />;

  const datasExercise = exercises.filter(
    (exercise) => exercise.chapterName === param
  );

  return (
    <div>
      <Exercises exercises={datasExercise} />
    </div>
  );
}

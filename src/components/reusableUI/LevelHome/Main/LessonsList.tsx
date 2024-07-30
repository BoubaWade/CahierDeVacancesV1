import { Lesson } from "../../../../Types/dataTypes";
import LessonCard from "../../LessonCard/LessonCard";
type LessonsProps = {
  id: string;
  lessons: Lesson[];
};
export default function LessonsList({ id, lessons }: LessonsProps) {
  return (
    <>
      {lessons?.map((lesson, index) => (
        <LessonCard key={index} lesson={lesson} id={id} />
      ))}
    </>
  );
}

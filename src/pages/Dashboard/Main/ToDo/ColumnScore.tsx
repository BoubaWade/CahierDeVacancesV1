type Props = {
  isCompleted: boolean;
  score: number;
};

export default function ColumnScore({ isCompleted, score }: Props) {
  return (
    <td className={score >= 50 ? "good-score" : "bad-score"}>
      {isCompleted ? `${score}  %` : <span>--</span>}
    </td>
  );
}

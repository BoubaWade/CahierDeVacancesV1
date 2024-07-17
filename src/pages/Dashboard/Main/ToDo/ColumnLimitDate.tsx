import UpdateFormToDo from "./UpdateFormToDo";

type ColumnLimitDateProps = {
  limitDate: string;
  id: string;
  inputValue: string | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ColumnLimitDate({
  limitDate,
  id,
  inputValue,
  setInputValue,
  isEditing,
  setIsEditing,
}: ColumnLimitDateProps) {
  return (
    <>
      {!isEditing ? (
        <td style={{ fontWeight: "500" }}>{limitDate}</td>
      ) : (
        <UpdateFormToDo
          id={id}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
}

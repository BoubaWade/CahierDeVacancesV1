type TableHeader = (string | number)[];

type EditableTableHeadProps = {
  headers: TableHeader | undefined;
};

export default function EditableTableHead({ headers }: EditableTableHeadProps) {
  return (
    <thead>
      <tr>
        {headers?.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

type InputControlledProps = {
  type: string;
  className?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export default function InputControlled({
  id,
  className,
  type,
  placeholder,
  name,
  value,
  checked,
  onChange,
  onFocus,
}: InputControlledProps) {
  return (
    <input
      id={id}
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}

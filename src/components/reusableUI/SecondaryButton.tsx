import styled from "styled-components";

type SecondaryButtonProps = {
  id?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

export default function SecondaryButton({
  id,
  label,
  onClick,
  className,
  disabled,
}: SecondaryButtonProps) {
  return (
    <SecondaryButtonStyled
      id={id}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
    </SecondaryButtonStyled>
  );
}
const SecondaryButtonStyled = styled.button`
  border: 1.5px solid #201f1f;
  padding: 8px;
  border-radius: 10px;
  background-color: #201f1f;
  color: #f8f8fa;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #f8f8fa;
    color: #201f1f;
    border: 1.5px solid #201f1f;
  }
`;

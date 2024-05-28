import styled from "styled-components";

type SecondaryButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function SecondaryButton({
  label,
  onClick,
  className,
}: SecondaryButtonProps) {
  return (
    <SecondaryButtonStyled className={className} onClick={onClick}>
      {label}
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

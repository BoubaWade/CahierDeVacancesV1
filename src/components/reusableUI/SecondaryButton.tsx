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
  border: none;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
`;

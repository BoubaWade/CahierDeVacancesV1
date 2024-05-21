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
  background-color: #044e1e;
  font-size: 1rem;
  color: #ffffff;
  padding: 7px 20px;
  border: 1.5px solid #044e1e;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    border: 1.5px solid #044e1e;
    color: #044e1e;
  }
`;

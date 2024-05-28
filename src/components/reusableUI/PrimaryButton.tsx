import styled from "styled-components";

type PrimaryButtonProps = {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function PrimaryButton({
  label,
  className,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </PrimaryButtonStyled>
  );
}
const PrimaryButtonStyled = styled.button`
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
  padding: 10px 30px;
  margin-top: 10px;
  background: #fde047;
  color: #070d1b;
  border: 1.5px solid #070d1b;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #ffff;
  }
`;

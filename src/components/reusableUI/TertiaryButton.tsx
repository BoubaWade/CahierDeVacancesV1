import styled from "styled-components";

type TertiaryButtonProps = {
  src: string;
  label?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
export default function TertiaryButton({
  src,
  label,
  className,
  onClick,
}: TertiaryButtonProps) {
  return (
    <TertiaryButtonStyled className={className} onClick={onClick}>
      <img src={src} />
      <span>{label}</span>
    </TertiaryButtonStyled>
  );
}
const TertiaryButtonStyled = styled.div`
  background-color: #f8f8fa;
  background: linear-gradient(to right, #fde047, #c2a205);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 45px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.8);
  img {
    width: 15px;
    margin: 0 10px;
  }
  span {
    font-size: 0.8rem;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

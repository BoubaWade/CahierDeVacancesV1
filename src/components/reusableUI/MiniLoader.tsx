import styled from "styled-components";
import { spin } from "../animations/animations";

type MiniLoaderProps = {
  className?: string;
};
export default function MiniLoader({ className }: MiniLoaderProps) {
  return <MiniLoaderStyled className={className}></MiniLoaderStyled>;
}
const MiniLoaderStyled = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid #efeeee;
  border-top: 3px solid #000;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spin} 1s linear infinite;
`;

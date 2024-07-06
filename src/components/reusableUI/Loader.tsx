import styled from "styled-components";
import { spin } from "../animations/animations";

type LoaderProps = {
  id?: string;
  classLoaderContainer?: string;
};

export default function Loader({ classLoaderContainer, id }: LoaderProps) {
  return (
    <LoaderStyled className={classLoaderContainer}>
      <div id={id} className="loader"></div>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  .loader {
    width: 65px;
    height: 65px;
    border: 8px solid #fde047;
    border-top: 8px solid #c2a205;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

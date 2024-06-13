import styled, { keyframes } from "styled-components";

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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}
`;
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

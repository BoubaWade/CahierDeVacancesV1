import styled from "styled-components";

type EmptyResultProps = {
  text: string;
};

export default function EmptyResult({ text }: EmptyResultProps) {
  return <EmptyResultStyled> {text}</EmptyResultStyled>;
}
const EmptyResultStyled = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

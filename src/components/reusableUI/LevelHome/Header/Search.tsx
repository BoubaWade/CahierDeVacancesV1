import styled from "styled-components";
import ControlledInput from "../../ControlledInput";

type SearchProps = {
  searchValue: string;
  onChangeValue: (value: string) => void;
};

export default function Search({ searchValue, onChangeValue }: SearchProps) {
  return (
    <SearchStyled>
      <ControlledInput
        type="text"
        placeholder="Rechercher un chapitre de la classe ..."
        value={searchValue}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </SearchStyled>
  );
}
const SearchStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 30%;
  min-width: 280px;
  margin-top: 10px;
  input {
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: 2rem;
    box-shadow: 0px 2px 20px -5px rgba(0, 0, 0, 0.55);
    outline: none;
    &:focus {
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
      border: 1.5px solid #c2a205;
    }
  }
`;

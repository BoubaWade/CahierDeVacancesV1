import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../../../../app/store";
import { setSearchToDoValue } from "../../../../features/Dashboard/dashboardSlice";
import MenuFilter from "./MenuFilter";
import { OptionSelect } from "../../../../Types/layoutTypes";

type HeaderToDoListProps = {
  options: OptionSelect[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export default function HeaderToDoList({
  options,
  selectedValue,
  onChange,
}: HeaderToDoListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchToDoValue(e.target.value));
  };

  return (
    <HeaderToDoListStyled>
      <h4>Liste des devoirs</h4>
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => handleInputChange(e)}
      />
      <MenuFilter
        options={options}
        selectedValue={selectedValue}
        onChange={onChange}
      />
    </HeaderToDoListStyled>
  );
}
const HeaderToDoListStyled = styled.div`
  background: #f1f2f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  h4 {
    padding: 3px 20px;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #d9d7d7;
  }
  input {
    width: 15%;
    min-width: 140px;
    height: 27px;
    padding: 0 10px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #d9d7d7;
    outline: none;
    box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.8);
    &::placeholder {
      font-size: 0.8rem;
    }
    &:focus {
      box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
      border: 1.5px solid #4c7f43;
    }
  }
  @media (max-width: 1024px) {
    h4 {
      font-size: 0.85rem;
      padding: 3px 10px;
    }
  }
`;

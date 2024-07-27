import styled from "styled-components";
import { RadioOption } from "../../Types/dataTypes";
import { useState } from "react";

type RadioGroupProps = {
  options: RadioOption[] | undefined;
  name: string;
  //   onChange: (value: string) => void;
  //   selectedValue: string;
  getSolutionValue: (value: string) => void;
  handleFocus: () => void;
};

export default function RadioGroup({
  options,
  name,
  getSolutionValue,
  handleFocus,
}: //   onChange,
//   selectedValue,
RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    getSolutionValue(value);
  };

  return (
    <RadioGroupStyled>
      {options?.map(({ label, value }) => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            // onChange={() => onChange(value)}
            onChange={() => handleRadioChange(value)}
            onFocus={handleFocus}
          />
          {label}
        </label>
      ))}
    </RadioGroupStyled>
  );
}
const RadioGroupStyled = styled.div`
  display: flex;
  justify-content: space-around;
  label {
    cursor: pointer;
    input {
      margin: 0 5px;
    }
  }
`;

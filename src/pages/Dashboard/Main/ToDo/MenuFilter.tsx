import { useState } from "react";
import styled from "styled-components";
import { OptionSelect } from "../../../../Types/layoutTypes";

type MenuFilterProps = {
  options: OptionSelect[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export default function MenuFilter({
  options,
  selectedValue,
  onChange,
}: MenuFilterProps) {
  const [subOptions, setSubOptions] = useState<OptionSelect["subOptions"]>([]);
  const [selectedSubValue, setSelectedSubValue] = useState<string>("");
  const LengthCondition = subOptions && subOptions.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selectedOption = options.find((option) => option.value === value);

    if (selectedOption?.subOptions) {
      setSubOptions(selectedOption.subOptions);
    } else {
      setSubOptions([]);
      setSelectedSubValue("");
    }

    onChange(value);
  };

  const handleSubChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubValue(value);
    onChange(value);
  };

  return (
    <MenuFilterStyled>
      <select id="menu-filter" value={selectedValue} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {LengthCondition && (
        <div className="sub-select-container">
          <select
            id="sub-menu-filter"
            value={selectedSubValue}
            onChange={handleSubChange}
          >
            {subOptions?.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}
    </MenuFilterStyled>
  );
}

const MenuFilterStyled = styled.div`
  display: flex;
  select {
    padding: 3px 10px;
    margin-right: 5px;
    border-radius: 8px;
    border: 1px solid #d9d7d7;
    outline: none;
    box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.8);
    /* appearance: none; */
    &:focus {
      box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
      border: 1.5px solid #4c7f43;
    }
  }
`;

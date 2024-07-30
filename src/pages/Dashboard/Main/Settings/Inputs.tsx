import styled from "styled-components";
import {
  FormState,
  getInputsSettingsFields,
} from "../../../../data/datasConfig";
import ControlledInput from "../../../../components/reusableUI/ControlledInput";

type Props = {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
};

export default function Inputs({ formState, setFormState }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const fields = getInputsSettingsFields(formState);

  return (
    <InputsStyled>
      {fields.map(({ label, type, id, value }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <ControlledInput
            type={type}
            id={id}
            className="input"
            value={value}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      ))}
    </InputsStyled>
  );
}
const InputsStyled = styled.div`
  width: 100%;
  label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
  }
  .input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    margin-top: 3px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 15px;
    color: #595858;
    outline-color: #fa755a;
  }
`;

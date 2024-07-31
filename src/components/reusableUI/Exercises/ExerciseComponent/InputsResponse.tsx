import RadioGroup from "../../../RadioGroup/RadioGroup";
import MathKeyboard from "../../MathKeyboard/MathKeyboard";
import { RadioOption } from "../../../../Types/dataTypes";

type InputsResponseProps = {
  radio: boolean | undefined;
  getSolutionValue: (value: string) => void;
  handleFocus: () => void;
  options: RadioOption[] | undefined;
};

export default function InputsResponse({
  radio,
  getSolutionValue,
  handleFocus,
  options,
}: InputsResponseProps) {
  return (
    <>
      {!radio ? (
        <MathKeyboard
          getSolutionValue={getSolutionValue}
          handleFocus={handleFocus}
        />
      ) : (
        <div style={{ margin: "30px 0" }}>
          <RadioGroup
            options={options}
            name="options"
            getSolutionValue={getSolutionValue}
            handleFocus={handleFocus}
          />
        </div>
      )}
    </>
  );
}

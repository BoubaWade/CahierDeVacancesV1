// import "./styles.css";
import MathInput from "react-math-keyboard";
import { useRef, useState } from "react";
import styled from "styled-components";

export default function MathKeyboard() {
  const firstMathfieldRef = useRef<any>();
  const [value1, setValue1] = useState("");

  const clear = () => {
    firstMathfieldRef?.current?.latex("");
  };
  return (
    <MathKeyboardStyled>
      <MathInput
        id="math-keyboard"
        setValue={setValue1}
        setMathfieldRef={(mathfield: any) =>
          (firstMathfieldRef.current = mathfield)
        }
        divisionFormat="fraction"
        lang="fr"
        style={{
          background: "#FFF",
          maxWidth: "400px",
          maxHeight: "75px",
        }}
        size="small"
      />
      <button onClick={() => clear()}>Éffacer</button>
      <p>Latex produced : {value1.replace(/\\/g, " \\\\")}</p>
    </MathKeyboardStyled>
  );
}
const MathKeyboardStyled = styled.div`
  max-width: 400px;
  .react-math-keyboard-input-container {
    border: 1.3px solid #512da8;
    border-radius: 5px;
    .react-math-keyboard-input {
      border: none;
    }
  }
  .react-math-keyboard-toolbar-container {
    background-color: #8872bc;
  }
  .react-math-keyboard-key-utility {
    background: linear-gradient(to right, #6c389c, #4d088e);
    color: #fff;
  }
`;

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
      {/* <button onClick={() => clear()}>Éffacer</button>
      <p>Latex produced : {value1.replace(/\\/g, " \\\\")}</p> */}
    </MathKeyboardStyled>
  );
}
const MathKeyboardStyled = styled.div`
  max-width: 400px;
  min-width: 300px;
  margin-top: 20px;
  .react-math-keyboard-input-container {
    border: 1.3px solid #c2a205;
    border-radius: 5px;
    .react-math-keyboard-input {
      border: none;
    }
  }
  .react-math-keyboard-keyboard-container {
    width: 90vw;
    max-width: 1300px;
    min-width: 400px;
    transform: translateX(5vw);
    .react-math-keyboard-keyboard-layout {
      background-color: #f3ebbf;
    }
    .react-math-keyboard-toolbar-container {
      background-color: #c2a205;
      border-radius: 15px 15px 0 0;
      overflow: hidden;
    }
    .react-math-keyboard-key-utility {
      background: #c2a205;
      color: #fff;
    }
  }
`;

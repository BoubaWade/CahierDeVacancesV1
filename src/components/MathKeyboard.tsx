// import "./styles.css";
import MathInput from "react-math-keyboard";
import { useRef, useState } from "react";
import styled from "styled-components";

export default function MathKeyboard() {
  const firstMathfieldRef = useRef();
  const [value1, setValue1] = useState("");

  const clear = () => {
    firstMathfieldRef.current.latex("");
  };
  return (
    <MathKeyboardStyled>
      <MathInput
        id="math-keyboard"
        setValue={setValue1}
        setMathfieldRef={(mathfield) => (firstMathfieldRef.current = mathfield)}
        divisionFormat="fraction"
        lang="fr"
        style={{
          background: "#FFF",
          width: "100%",
          minWidth: "200px",
          //   minHeight: "45px",
          //   border: "2px solid #044e1e",
        }}
      />
      <button onClick={() => clear()}>Éffacer</button>
      {/* <button onClick={() =>}>Clavier</button> */}
      <p>Latex produced : {value1.replace(/\\/g, " \\\\")}</p>
    </MathKeyboardStyled>
  );
}
const MathKeyboardStyled = styled.div`
  /* width: 200px; */
  .react-math-keyboard-input-container {
    /* width: 200px; */
    /* position: absolute; */
    /* top: 0; */
  }
  /* .react-math-keyboard-keyboard-container .scrollbar {
    bottom: 100%;
  } */
  .react-math-keyboard-toolbar-container {
    background-color: #8c6da9;
  }

  .react-math-keyboard-key-utility {
    background-color: #8c6da9;
    color: #fff;
  }
`;

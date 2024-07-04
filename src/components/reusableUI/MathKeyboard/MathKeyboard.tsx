import "//unpkg.com/mathlive";
import { MathfieldElement } from "mathlive";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "math-field": React.DetailedHTMLProps<
        React.HTMLAttributes<MathfieldElement>,
        MathfieldElement
      > & {
        "virtual-keyboard-policy"?: string;
        placeholder?: string;
      };
    }
  }
}

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function MathKeyboard() {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const mathFieldRef = useRef<MathfieldElement>(null);
  const keyboardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mathFieldRef.current && keyboardContainerRef.current) {
      (mathFieldRef.current as any).mathVirtualKeyboardPolicy = "manual";
      const handleFocusIn = () => {
        if (window.mathVirtualKeyboard) {
          window.mathVirtualKeyboard.container = keyboardContainerRef.current;
          window.mathVirtualKeyboard.show();
          setIsVisible(true);
        }
      };

      const handleFocusOut = () => {
        if (window.mathVirtualKeyboard) {
          window.mathVirtualKeyboard.hide();
          setIsVisible(false);
        }
      };

      mathFieldRef.current.addEventListener("focusin", handleFocusIn);
      mathFieldRef.current.addEventListener("focusout", handleFocusOut);

      return () => {
        if (mathFieldRef.current) {
          mathFieldRef.current.removeEventListener("focusin", handleFocusIn);
          mathFieldRef.current.removeEventListener("focusout", handleFocusOut);
        }
      };
    }
  }, []);

  return (
    <MathKeyboardStyled>
      <math-field
        ref={mathFieldRef}
        onInput={(e) => setValue(e.currentTarget.value)}
        placeholder="réponse..."
        style={{
          maxWidth: "500px",
          minWidth: "230px",
          width: "100%",
          fontSize: "1.1rem",
          display: "block",
          paddingLeft: "5px",
          margin: "10px 0 20px",
          overflowX: "auto",
        }}
      >
        {value}
      </math-field>
      {/* <p>Value: {value}</p> */}
      <KeyboardContainer
        className={isVisible ? "visible-keyboard" : ""}
        ref={keyboardContainerRef}
      />
    </MathKeyboardStyled>
  );
}

const MathKeyboardStyled = styled.div`
  math-field {
    max-width: 500px;
  }
  math-field::part(menu-toggle)::after {
    display: none;
  }
  math-field::part(virtual-keyboard-toggle) {
    display: none;
  }
  math-field::part(virtual-keyboard-toggle)::after {
    display: none;
  }
  math-field::part(placeholder) {
    font-size: 15px;
  }
`;

const KeyboardContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 280px;
  transform: translateY(-15px);
  display: none;
  &.visible-keyboard {
    display: block;
  }
  .MLK__layer.is-visible {
    padding-bottom: 10px;
  }
  .ML__keyboard.is-visible > .MLK__backdrop {
    transform: translateY(-280px);
    border-radius: 5px;
    .MLK__plate {
      padding-left: 5px;
      padding-right: 5px;
      border-radius: 5px;
      .MLK__layer.is-visible {
        .MLK__tooltip {
          &::after {
            display: none;
          }
        }
      }
    }
  }
`;

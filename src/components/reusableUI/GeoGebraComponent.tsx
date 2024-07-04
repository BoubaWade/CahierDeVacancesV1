declare global {
  interface Window {
    GGBApplet: any;
    ggbOnInit: any;
  }
}

import { useEffect, useRef } from "react";
import styled from "styled-components";

const GeoGebraComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const parameters = {
        id: "ggbApplet",
        appName: "classic",
        showToolBar: true,
        showAlgebraInput: false,

        showMenuBar: false,
        useBrowserForJS: true,
        language: "fr",
      };

      // Initialiser l'applet GeoGebra
      const ggbApplet = new window.GGBApplet(parameters, true);
      ggbApplet.inject("ggb-element");

      //   Ajouter une fonction de rappel pour l'événement 'appletOnLoad'
      window.ggbOnInit = () => {
        // ggbApplet.setAlgebraViewVisible(false);
        // ggbApplet.evalCommand("A = (1, 1)");
        // ggbApplet.evalCommand("B = (4, 2)");
        // ggbApplet.evalCommand("C = (2, 4)");
        // ggbApplet.evalCommand("Line(A, B)");
        // ggbApplet.evalCommand("f(x) = x^2");
        //   ggbApplet.showKeyboard(false);
      };
    }
  }, []);

  return (
    <GeoGebraComponentStyled
      ref={containerRef}
      id="ggb-element"
    ></GeoGebraComponentStyled>
  );
};

export default GeoGebraComponent;
const GeoGebraComponentStyled = styled.div`
  width: 90%;
  height: 700px;
  margin: 0 auto;
  #ggb-element {
    width: 100%;
    height: 100%;
  }
`;

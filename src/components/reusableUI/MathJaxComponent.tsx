// import { useEffect } from "react";
// import styled from "styled-components";

// export default function MathJaxComponent({ latex }) {
//   const formattedLatex = latex.replace(/ /g, "\\ ");
//   useEffect(() => {
//     if (window.MathJax) {
//       window.MathJax.typesetPromise();
//     }
//   }, [formattedLatex]);

//   return (
//     <MathJaxComponentStyled
//       className="math-container"
//       dangerouslySetInnerHTML={{ __html: `\\(${formattedLatex}\\)` }}
//     />
//   );
// }

// const MathJaxComponentStyled = styled.div`
//   /* white-space: normal;
//   overflow-wrap: break-word;
//   word-wrap: break-word;
//   max-width: 100%; */
//   /* font-family: "Montserrat", sans-serif;
//   font-style: normal; */
// `;

import { useEffect } from "react";
type MathJaxComponentProps = {
  latex: string;
};

const MathJaxComponent = ({ latex }: MathJaxComponentProps) => {
  // Fonction pour traiter le texte et formater les formules mathématiques
  const processLatex = (text: string) => {
    // Regex pour trouver les expressions mathématiques encadrées par $...$ ou \(...\)
    const regex = /\$(.*?)\$|\\\((.*?)\\\)/g;
    return text.split(regex).map((part, index) => {
      if (part === undefined) return null;
      if (index % 2 === 0) {
        // Texte normal
        return <span key={index}>{part}</span>;
      } else {
        // const formattedPart = part.replace(/ /g, "\\ ");
        console.log("je suis atteint");
        return (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: `\\(${part}\\)` }}
          />
        );
      }
    });
  };

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [latex]);

  return <div className="math-container">{processLatex(latex)}</div>;
};

export default MathJaxComponent;

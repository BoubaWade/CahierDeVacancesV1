import { useEffect } from "react";
type MathJaxComponentProps = {
  latex: string;
  className?: string;
};

export const processLatex = (text: string) => {
  // Regex pour trouver les expressions mathématiques encadrées par $...$ ou \(...\)
  const regex = /\$(.*?)\$|\\\((.*?)\\\)/g;
  return text?.split(regex).map((part, index) => {
    if (part === undefined) return null;
    if (index % 2 === 0) {
      // Texte normal
      return <span key={index}>{part}</span>;
    } else {
      // const formattedPart = part.replace(/ /g, "\\ ");
      return (
        <span
          key={index}
          dangerouslySetInnerHTML={{ __html: `\\(${part}\\)` }}
        />
      );
    }
  });
};
const MathJaxComponent = ({ latex, className }: MathJaxComponentProps) => {
  // Fonction pour traiter le texte et formater les formules mathématiques

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [latex]);

  return <div className={className}>{processLatex(latex)}</div>;
};

export default MathJaxComponent;

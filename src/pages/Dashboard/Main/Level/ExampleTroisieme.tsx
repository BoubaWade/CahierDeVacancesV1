import Latex from "react-latex";

export default function ExampleTroisieme() {
  const examplesDatasTroisieme = [
    [
      "Exercice sur le calcul littéral",
      "1. Factoriser $4 x^{2}-12 x+9$.",
      "2. Factoriser $(2 x-3)^{2}-4$.",
      "En déduire une factorisation de $4 x^{2}-12 x+5$.",
    ],
    [
      "Exercice sur le calcul littéral",
      "Développer, réduire les expressions suivantes :",
      "$\\mathrm{I}=(4 x+6)^{2}$",
      "$\\mathrm{Q}=(x+2)^{2}-6(3 x-5)^{2}$",
      "$\\mathrm{A}=3(4x+7)+4(2x-9)$",
      "$\\mathrm{D}=(2x-5)(3x-2)$",
    ],
    [
      "Exercice sur les équations",
      "Résoudre les équations (donner les solutions):",
      "$ 4x-2+(5 x-1)=-3(7-x)$",
      "$4(2+3 x)-(x-5)=0$",
      "$\\quad-2(2 x-4)=6 x-(-3+x)$",
      "$\\quad(9 x-4)(-2+5 x)-(9 x-4)(3 x-5)=0$",
    ],
  ];
  return (
    <>
      {examplesDatasTroisieme.map((datas, index) => (
        <div key={index} className="exercise">
          {datas.map((data, index) => (
            <p key={index}>
              <Latex>{data}</Latex>
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

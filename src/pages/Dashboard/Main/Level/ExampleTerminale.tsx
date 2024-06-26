import calculAire from "../../../../assets/ExerciseImages/calcul-daire.jpg";
import MathJaxComponent from "../../../../components/reusableUI/MathJaxComponent";

export default function ExampleTerminale() {
  const examplesDatasTerminale = [
    "Soit la fonction $f: x \\mapsto 6x^2 +12 x-1$ \\ $définie sur l'intervalle$ $[-10 ; 18]$.",
    "1. Calculer $f^\\prime(x)$.",
    "2. Étudier le signe de $f^\\prime(x)$.",
    "3. En déduire le tableau de variation de $f$.",
  ];

  return (
    <>
      <div className="exercise">
        <p>Exercice sur les dérivées</p>
        {examplesDatasTerminale.map((data, index) => (
          <MathJaxComponent latex={data} key={index} />
        ))}
      </div>
      <div className="exercise">
        <p>Exercice sur le calcul intégral</p>
        <MathJaxComponent
          latex={
            "Calculer, en unités d'aire, l'aire de la surface colorée construite ci-dessous dans une repère orthonrmé et délimitée par les représentations graphiques des fonctions $f$ \\ et \\ $g$ définies sur $\\mathbb R$ \\ $par$ $f(x)=5-(x-2)^2$ \\ $et$ $g(x)= -x+1$."
          }
        />
        <img src={calculAire} />
      </div>
    </>
  );
}

import Latex from "react-latex";
import calculAire from "../../../../assets/ExerciseImages/calcul-daire.jpg";

export default function ExampleTerminale() {
  const examplesDatasTerminale = [
    "Exercice sur les dérivées",
    "Soit la fonction $f: x \\mapsto 6x^2 +12 x-1$, définie sur l'intervalle $[-10 ; 18]$.",
    "1. Calculer $f^\\prime(x)$.",
    "2. Étudier le signe de $f^\\prime(x)$.",
    "3. En déduire le tableau de variation de $f$.",
  ];

  return (
    <>
      <div className="exercise">
        {examplesDatasTerminale.map((data, index) => (
          <p key={index}>
            <Latex>{data}</Latex>
          </p>
        ))}
      </div>
      <div className="exercise">
        <p>Exercice sur le calcul intégral</p>
        <p>
          <Latex>
            Calculer, en unités d'aire, l'aire de la surface colorée construite
            ci-dessous dans une repère orthonrmé et délimitée par les
            représentations graphiques des fonctions $f$ et $g$ définies sur
            $\mathbb R$ par $f(x)=5-(x-2)^2$ et $g(x)= -x+1$.
          </Latex>
        </p>
        <img src={calculAire} />
      </div>
    </>
  );
}

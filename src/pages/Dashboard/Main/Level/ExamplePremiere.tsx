import Latex from "react-latex";

export default function ExamplePremiere() {
  const exampleDatasPremiere = [
    "Exercice sur les suites",
    "On considère deux suites $\\left(u_n\\right)$ et $\\left(v_n\\right)$ définies pour tout $n\\in\\mathbb{N}$ par : $u_n=\\dfrac{3\\times 2^n-4n+3}{2}\\text{ et } v_n=\\dfrac{3\\times 2^n+4n-3}{2}.$",
    "On définit la suite $\\left(w_n\\right)$ par $w_n=u_n+v_n$.",
    "Montrer que la suite $\\left(w_n\\right)$ est géométrique. Préciser sa raison, son premier terme ainsi que son sens de variation.",
    "Donner le terme général de $w_n$.",
    "On définit la suite $\\left(t_n\\right)$ par $t_n=u_n-v_n$.",
    "Montrer que la suite $\\left(t_n\\right)$ est arithmétique. Préciser sa raison, son premier terme ainsi que son sens de variation.",
    "Donner le terme général de $t_n$.",
    "Donner le terme général de $u_n$ (indication : calculer $w_n+t_n$)",
    "Donner le terme général de $v_n$.",
  ];

  return (
    <div className="exercise">
      {exampleDatasPremiere.map((data, index) => (
        <p key={index}>
          <Latex>{data}</Latex>
        </p>
      ))}
    </div>
  );
}

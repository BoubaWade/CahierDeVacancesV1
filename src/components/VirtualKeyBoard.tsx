import { useState } from "react";

export default function VirtualKeyboard() {
  const [inputValue, setInputValue] = useState("");

  // Fonction pour ajouter un caractère au champ de texte
  const addCharacter = (character) => {
    setInputValue((prevValue) => prevValue + character);
  };

  // Fonction pour effacer le champ de texte
  const clearInput = () => {
    setInputValue("");
  };

  // Fonction pour calculer le résultat
  const calculateResult = () => {
    try {
      const result = eval(inputValue); // Utilisation de la fonction eval pour évaluer l'expression
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <div>
      {/* Champ de texte */}
      <input type="text" value={inputValue} readOnly />

      {/* Clavier virtuel */}
      <div>
        {/* Chiffres */}
        <button onClick={() => addCharacter("1")}>1</button>
        <button onClick={() => addCharacter("2")}>2</button>
        <button onClick={() => addCharacter("3")}>3</button>
        <button onClick={() => addCharacter("4")}>4</button>
        <button onClick={() => addCharacter("5")}>5</button>
        <button onClick={() => addCharacter("6")}>6</button>
        <button onClick={() => addCharacter("7")}>7</button>
        <button onClick={() => addCharacter("8")}>8</button>
        <button onClick={() => addCharacter("9")}>9</button>
        <button onClick={() => addCharacter("0")}>0</button>

        {/* Opérations mathématiques */}
        <button onClick={() => addCharacter("+")}>+</button>
        <button onClick={() => addCharacter("-")}>-</button>
        <button onClick={() => addCharacter("*")}>*</button>
        <button onClick={() => addCharacter("/")}>/</button>

        {/* Lettres de l'alphabet */}
        <button onClick={() => addCharacter("a")}>a</button>
        <button onClick={() => addCharacter("b")}>b</button>
        <button onClick={() => addCharacter("c")}>c</button>
        <button onClick={() => addCharacter("d")}>d</button>
        <button onClick={() => addCharacter("e")}>e</button>
        <button onClick={() => addCharacter("f")}>f</button>
        <button onClick={() => addCharacter("g")}>g</button>
        <button onClick={() => addCharacter("h")}>h</button>
        <button onClick={() => addCharacter("i")}>i</button>
        <button onClick={() => addCharacter("j")}>j</button>
        <button onClick={() => addCharacter("k")}>k</button>
        <button onClick={() => addCharacter("l")}>l</button>
        <button onClick={() => addCharacter("m")}>m</button>
        <button onClick={() => addCharacter("n")}>n</button>
        <button onClick={() => addCharacter("o")}>o</button>
        <button onClick={() => addCharacter("p")}>p</button>
        <button onClick={() => addCharacter("q")}>q</button>
        <button onClick={() => addCharacter("r")}>r</button>
        <button onClick={() => addCharacter("s")}>s</button>
        <button onClick={() => addCharacter("t")}>t</button>
        <button onClick={() => addCharacter("u")}>u</button>
        <button onClick={() => addCharacter("v")}>v</button>
        <button onClick={() => addCharacter("w")}>w</button>
        <button onClick={() => addCharacter("x")}>x</button>
        <button onClick={() => addCharacter("y")}>y</button>
        <button onClick={() => addCharacter("z")}>z</button>

        <button onClick={() => addCharacter("A")}>A</button>
        <button onClick={() => addCharacter("B")}>B</button>
        <button onClick={() => addCharacter("C")}>C</button>
        <button onClick={() => addCharacter("D")}>D</button>
        <button onClick={() => addCharacter("E")}>E</button>
        <button onClick={() => addCharacter("F")}>F</button>
        <button onClick={() => addCharacter("G")}>G</button>
        <button onClick={() => addCharacter("H")}>H</button>
        <button onClick={() => addCharacter("I")}>I</button>
        <button onClick={() => addCharacter("J")}>J</button>
        <button onClick={() => addCharacter("K")}>K</button>
        <button onClick={() => addCharacter("L")}>L</button>
        <button onClick={() => addCharacter("M")}>M</button>
        <button onClick={() => addCharacter("N")}>N</button>
        <button onClick={() => addCharacter("O")}>O</button>
        <button onClick={() => addCharacter("P")}>P</button>
        <button onClick={() => addCharacter("Q")}>Q</button>
        <button onClick={() => addCharacter("R")}>R</button>
        <button onClick={() => addCharacter("S")}>S</button>
        <button onClick={() => addCharacter("T")}>T</button>
        <button onClick={() => addCharacter("U")}>U</button>
        <button onClick={() => addCharacter("V")}>V</button>
        <button onClick={() => addCharacter("W")}>W</button>
        <button onClick={() => addCharacter("X")}>X</button>
        <button onClick={() => addCharacter("Y")}>Y</button>
        <button onClick={() => addCharacter("Z")}>Z</button>

        {/* Ajoutez d'autres boutons pour les lettres de l'alphabet selon vos besoins */}

        {/* Bouton égal */}
        <button onClick={calculateResult}>=</button>

        {/* Bouton effacer */}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

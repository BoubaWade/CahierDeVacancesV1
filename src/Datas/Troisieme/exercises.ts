export const exercises = [
  {
    number: 1,
    statements:
      "Lorem ipsum dolor sit amet consectetur adirferendis am sit ratione aperiamrcitationem repellat hic distinctio sapiente laboriosam. Laboriosam optio impedit aliquid modi illo quas ut autem vitae, culpa temporibus cumque sequi voluptas debitis unde quia fugiat numquam distinctio, aperiam est porro! Veritatis odio molestiae optio ipsa recusandae hic quibusdam ex praesentium inventore. Illum autem sint tempora quas voluptatem voluptate delectus veritatis dolorum nulla alias! Inventore autem, modi velit odit libero non veritatis deleniti mollitia rerum? Illum, voluptatem vero quo eos saepe, quis earum architecto qui animi facilis reiciendis sapiente aliquam libero ullam sirem, autem.",

    // "Soit\\ A = (3x – 2)²\\ – \\ 64\\ \\sqrt{5}\\ \\ \\text{Promotion annuelle du Parcours Front-End  ghfdgsfgdshgfsghfgsgfjcgsjfcfdsbfbvfbdfhjbjrbqf<brjbqv <bwjsbdcjdswbjbdbsjf}",
    // time: 30,
    questionsSolutions: [
      {
        time: 30,
        question: "Développer, \\ réduire \\ et \\ ordonner A.",
        solution: [
          "A = (3x-2)^2 - 64",
          "= (3x-2)(3x-2) - 64",
          "= 9x^2 - 6x - 6x + 4 - 64",
          "= 9x^2 - 12x + 4 - 64",
          "= 9x^2 - 12x - 60",
        ],
      },
      {
        time: 200,
        question: "Factoriser \\ A.",
        solution: [
          "(3x-2)^2 - 64",
          "= (3x-2)^2 - 8^2",
          "= (3x-2+8)(3x-2-8)",
          "= (3x+6)(3x-10)",
        ],
      },
    ],
  },

  {
    number: 2,
    statements: "Développer, réduire et ordonner les expressions suivantes :",
    // "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]",
    // time: 300,
    questionsSolutions: [
      {
        time: 200,
        question: "A = 3(4x + 7) + 4(2x - 9)",
        solution: [
          // "(3x-10)(3x+6) = 0",
          // "3x-10 = 0 \\quad\\text{(ou)} \\quad3x+6 = 0",
          // "3x = 10 \\quad\\text{(ou)} \\quad 3x = -6",
          // "x = \\frac{10}{3} \\quad\\text{(ou)} \\quad x = \\frac{-6}{3}",
          // "x = \\frac{10}{3}  \\quad\\text{(ou)} \\quad x = -2",

          "A = 3(4x + 7) + 4(2x - 9)",
          "A = 12x + 21 + 8x – 36",
          "A = 20x – 15",
        ],
      },
      {
        time: 200,
        question: "B = 7x(2x - 5) - x(2x - 5)",
        solution: [
          "B = 7x(2x - 5) - x(2x - 5)",
          "B = 14x² - 35x - 2x² + 5x",
          "B = 12x² - 30x",
          // "What is $(3\\times 4) \\div (5-3)$",
          // "(3x-10)(3x+6) = 0",
          // "3x-10 = 0  (ou)  3x+6 = 0",
          // "3x = 10 (ou) 3x = -6",
          // "x = $\\frac{10}{3}$ (ou) x = $\\frac{-6}{3}$",
          // "x = $\\frac{10}{3}$ (ou) x = -2",
        ],
      },
      {
        time: 250,
        question: "C = (2x + 5)(3x + 7)",
        solution: [
          "(3x-10)(3x+6) = 0",
          "3x-10 = 0 \\quad\\text{(ou)} \\quad3x+6 = 0",
          "3x = 10 \\quad\\text{(ou)} \\quad 3x = -6",
          "x = \\frac{10}{3} \\quad\\text{(ou)} \\quad x = \\frac{-6}{3}",
          "x = \\frac{10}{3}  \\quad\\text{(ou)} \\quad x = -2",
        ],
      },
      {
        time: 250,
        question: "D = (2x - 5)(3x - 2)",
        solution: [
          "(3x-10)(3x+6) = 0",
          "3x-10 = 0 \\quad\\text{(ou)} \\quad3x+6 = 0",
          "3x = 10 \\quad\\text{(ou)} \\quad 3x = -6",
          "x = \\frac{10}{3} \\quad\\text{(ou)} \\quad x = \\frac{-6}{3}",
          "x = \\frac{10}{3}  \\quad\\text{(ou)} \\quad x = -2",
        ],
      },
    ],
  },
  {
    number: 3,
    statements: "",
    // time: 250,
    questionsSolutions: [
      {
        time: 300,
        question: "\\ Résoudre\\ l'équation\\ suivante :\\ x-7 = 2x+5 \\\\",
        solution: [
          "x - 7 = 2x + 5",
          "x - 2x - 7 = 2x - 2x + 5",
          "-x - 7 = 5",
          "-x - 7 + 7 = 5 + 7",
          "-x = 12",
          "\\frac{-x}{-1} = \\frac{12}{-1}",
          "x = -12",
        ],
      },
    ],
  },
];

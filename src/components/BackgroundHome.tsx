import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type BackgroundHomeProps = {
  className?: string;
  rowClassName?: string;
  columnClassName?: string;
  svgClassName?: string;
  rest?: string;
};

export const BackgroundHome = ({
  className,
  rowClassName,
  columnClassName,
  svgClassName,
  ...rest
}: BackgroundHomeProps) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(50).fill(1);
  let colors = [
    "#7dd3fc",
    "#f9a8d4",
    "#6ee7b7",
    "#fde047",
    "#fca5a5",
    "#c4b5fd",
    "#93c5fd",
    "#a5b4fc",
    "#c084fc",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ContainerStyled className={className} {...rest}>
      {rows.map((_, i) => (
        <Row key={`row` + i} className={rowClassName}>
          {cols.map((_, j) => (
            <Col
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className={columnClassName}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <Icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={svgClassName}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </Icon>
              ) : null}
            </Col>
          ))}
        </Row>
      ))}
    </ContainerStyled>
  );
};

export const Boxes = React.memo(BackgroundHome);

const ContainerStyled = styled.div`
  position: absolute;
  /* left: 25%;
  top: -25%; */
  padding: 1rem;
  display: flex;
  transform: translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675)
    rotate(0deg) translateZ(0);
  width: 100%;
  height: 100%;
  z-index: 0;
  ${(props) =>
    props.className &&
    css`
      ${props.className}
    `};
`;

const Row = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-left: 1px solid #21252a;
  position: relative;
`;

const Col = styled(motion.div)`
  width: 4rem;
  height: 2rem;
  border-right: 1px solid #191b1f;
  border-top: 1px solid #191b1f;
  position: relative;
`;

const Icon = styled.svg`
  position: absolute;
  height: 1.5rem;
  width: 2.5rem;
  top: -0.875rem;
  left: -1.375rem;
  color: #191b1f;
  stroke-width: 1px;
  pointer-events: none;
`;

// import React from "react";
// import { motion } from "framer-motion";
// import styled, { css } from "styled-components";

// const getRandomShapeStyle = () => {
//   const shapes = [
//     css`
//       clip-path: circle(50% 50% 50%);
//     `,
//     css`
//       clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 50%);
//     `,

//     css`
//       clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//     `,
//     css`
//       clip-path: ellipse(50% 25% at 50% 50%);
//     `,
//     css`
//       clip-path: inset(0% 0% 0% 0%);
//     `,
//   ];
//   return shapes[Math.floor(Math.random() * shapes.length)];
// };

// type BackgroundHomeProps = {
//   className?: string;
//   rowClassName?: string;
//   columnClassName?: string;
//   svgClassName?: string;
//   rest?: string;
// };

// export const BackgroundHome = ({
//   className,
//   rowClassName,
//   columnClassName,
//   svgClassName,
//   ...rest
// }: BackgroundHomeProps) => {
//   const rows = new Array(50).fill(1);
//   const cols = new Array(50).fill(1);
//   let colors = [
//     "#7dd3fc",
//     "#f9a8d4",
//     "#6ee7b7",
//     "#fde047",
//     "#fca5a5",
//     "#c4b5fd",
//     "#93c5fd",
//     "#a5b4fc",
//     "#c084fc",
//   ];
//   const getRandomColor = () => {
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   return (
//     <ContainerStyled className={className} {...rest}>
//       {rows.map((_, i) => (
//         <Row key={`row` + i} className={rowClassName}>
//           {cols.map((_, j) => (
//             <Col
//               whileHover={{
//                 backgroundColor: `${getRandomColor()}`,
//                 transition: { duration: 0 },
//               }}
//               animate={{
//                 transition: { duration: 2 },
//               }}
//               key={`col` + j}
//               className={columnClassName}
//             >
//               {j % 2 === 0 && i % 2 === 0 ? (
//                 <Icon
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   className={svgClassName}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 6v12m6-6H6"
//                   />
//                 </Icon>
//               ) : null}
//             </Col>
//           ))}
//         </Row>
//       ))}
//     </ContainerStyled>
//   );
// };

// export const Boxes = React.memo(BackgroundHome);

// const ContainerStyled = styled.div`
//   position: absolute;
//   left: 25%;
//   top: -25%;
//   padding: 1rem;
//   display: flex;
//   transform: translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675)
//     rotate(0deg) translateZ(0);
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   ${(props) =>
//     props.className &&
//     css`
//       ${props.className}
//     `};
// `;

// const Row = styled(motion.div)`
//   width: 4rem;
//   height: 2rem;
//   border-left: 1px solid #475569;
//   position: relative;
// `;

// const Col = styled(motion.div)`
//   width: 4rem;
//   height: 2rem;

//   position: relative;
//   ${() =>
//     css`
//       ${getRandomShapeStyle()}
//     `};
//   border-right: 1px solid #475569;
//   border-top: 1px solid #475569;
// `;

// const Icon = styled.svg`
//   position: absolute;
//   height: 1.5rem;
//   width: 2.5rem;
//   top: -0.875rem;
//   left: -1.375rem;
//   pointer-events: none;
// `;

// import styled from "styled-components";

// type PrimaryButtonProps = {
//   label: string;
//   className?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// };

// export default function PrimaryButton({
//   label,
//   className,
//   onClick,
// }: PrimaryButtonProps) {
//   return (
//     <PrimaryButtonStyled className={className} onClick={onClick}>
//       {label}
//     </PrimaryButtonStyled>
//   );
// }
// const PrimaryButtonStyled = styled.button`
//   background-color: #4d088e;
//   color: #ffff;
//   font-size: 1.2rem;
//   padding: 10px 25px;
//   border: 2px solid #4d088e;
//   border-radius: 30px;
//   margin: 0 10px;
//   cursor: pointer;
//   &:hover {
//     background: transparent;
//   }
// `;
import styled from "styled-components";

type PrimaryButtonProps = {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PrimaryButton({
  label,
  className,
  onClick,
}: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      {label}
    </PrimaryButtonStyled>
  );
}
const PrimaryButtonStyled = styled.button`
  /* background-color: #512da8; */
  background: linear-gradient(to right, #6c389c, #4d088e);

  color: #fff;
  font-size: 12px;
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #512da8;
    background: #fff;
    border: 1px solid #512da8;
  }
  /* .hidden {
    background-color: transparent;
    border-color: #fff;
  } */
`;

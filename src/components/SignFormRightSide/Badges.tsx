import racine from "../../assets/racine.svg";
import infinity from "../../assets/infinity-solid.svg";
import percent from "../../assets/percent.svg";
import functionFI from "../../assets/functionFI.svg";
import styled from "styled-components";

export default function Badges() {
  const imgFields = [functionFI, infinity, percent, racine];

  return (
    <BadgesStyled>
      {imgFields.map((imgField, index) => (
        <img key={index} src={imgField} />
      ))}
    </BadgesStyled>
  );
}
const BadgesStyled = styled.div`
  img {
    width: 35px;
    margin: 0 3px;
  }
`;

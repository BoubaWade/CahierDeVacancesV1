import styled from "styled-components";
import TertiaryButton from "../../TertiaryButton";
import backward from "../../../../assets/icons/backward.svg";
import nextward from "../../../../assets/icons/nextward.svg";

type FooterProps = {
  displayPrevious: () => void;
  displayNext: () => void;
};

export default function Footer({ displayPrevious, displayNext }: FooterProps) {
  return (
    <FooterStyled>
      <TertiaryButton
        src={backward}
        label="préc."
        className="back"
        onClick={displayPrevious}
      />
      <TertiaryButton
        src={nextward}
        label="suiv."
        className="next"
        onClick={displayNext}
      />
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .back {
    width: 65px;
  }
  .next {
    width: 60px;
    flex-direction: row-reverse;
  }
`;

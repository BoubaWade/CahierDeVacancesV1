import styled from "styled-components";
import CalendarComponent from "../../../../components/reusableUI/CalendarComponent";
import Modal from "../../../../components/reusableUI/Modal/Modal";
import { useState } from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import LeftSection from "./LeftSection";

export default function Section() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <SectionStyled>
      <LeftSection setIsOpenModal={setIsOpenModal} />
      <CalendarComponent className="calendar" />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DropDown />
      </Modal>
    </SectionStyled>
  );
}
const SectionStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  transition: all 200ms ease;
  &:hover {
    box-shadow: none;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    .calendar {
      max-width: 500px;
    }
  }
`;

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
      <CalendarComponent />
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DropDown />
      </Modal>
    </SectionStyled>
  );
}
const SectionStyled = styled.section`
  position: relative;
  background: #f1f2f3;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.8);
  transition: all 200ms ease;
  &:hover {
    box-shadow: none;
  }
`;

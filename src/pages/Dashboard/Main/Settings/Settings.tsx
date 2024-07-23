import styled from "styled-components";
import { useState } from "react";
import SettingsForm from "./SettingsForm";
import SettingsModal from "./SettingsModal";
import SubscriptionButtons from "./SubscriptionButtons";

export default function Settings() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <SettingsStyled>
      <h2>Modifier vos paramètres</h2>
      <SettingsForm />
      <SubscriptionButtons setOpenModal={setOpenModal} />
      <SettingsModal openModal={openModal} setOpenModal={setOpenModal} />
    </SettingsStyled>
  );
}
const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px 20px;
  h2 {
    color: #595858;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }
`;

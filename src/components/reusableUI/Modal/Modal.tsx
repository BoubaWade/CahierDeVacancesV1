import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";

type ModalProps = {
  children: any;
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Modal({ children, open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <ModalStyled>
      {children}
      <PrimaryButton label="Fermer" className="close-modal" onClick={onClose} />
    </ModalStyled>
  );
}
const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .close-modal {
    width: 120px;
    padding: 8px;
    margin: 0 auto;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

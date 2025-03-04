import styled from "styled-components";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContext was used outside the Modal Provider");
  }
  return context;
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [id, setId] = useState(null);
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close, id, setId }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName, id }) {
  const { open, setId } = useModalContext();

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
      setId(id);
    },
  });
}

function Window({ children, name }) {
  const { openName, close, id } = useModalContext();
  const ref = useOutsideClick(close);
  if (openName !== name) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close, id: id })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

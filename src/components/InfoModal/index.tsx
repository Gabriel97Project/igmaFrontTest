// Modal.tsx
import React, { useEffect } from 'react';
import * as Styled from "./style"

interface ModalProps {
  text: string;
  onClose: () => void;
}
/* Função que abre o modal e mostra o texto de acordo com oque foi clicado (ou login, ou preenchimento do newsletter) */

const Modal: React.FC<ModalProps> = ({ text, onClose }) => {
  useEffect(() => {
   
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Styled.ModalOverlay as='button' onClick={()=> onClose()}>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
        <p>{text}</p>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};

export default Modal;

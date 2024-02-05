// Modal.tsx
import React, { useEffect } from 'react';
import styled from 'styled-components';

interface ModalProps {
  text: string;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow: hidden; /* Prevent scrolling when the modal is open */
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ text, onClose }) => {
  useEffect(() => {
    // Add event listener to handle scroll on the body
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      // Cleanup the event listener and reset body style on component unmount
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalOverlay as='button' onClick={()=> onClose()}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p>{text}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

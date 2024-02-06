import styled from "styled-components"

export const ModalOverlay = styled.div`
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
  overflow: hidden; 
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
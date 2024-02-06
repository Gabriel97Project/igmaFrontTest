import * as Styled from "./style";
import headerLogo from "../../assets/LogoHeader.svg"
import userSvg from "../../assets/userImage.svg"
import avatar from "../../assets/avatar@2x.png"
import { useState } from "react";
import Modal from "../InfoModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
    return setIsLogged(true)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Styled.HeaderStyle>
      {isModalOpen && (
        <Modal text="Seja bem vindo!" onClose={closeModal} />
      )}
      <Styled.HeaderImagesStyle src={headerLogo} alt="Igma logo header" />
      <Styled.HeaderBoxSizeStyle>
        <Styled.HeaderButtonStyle isLogged={isLogged} onClick={openModal}><Styled.HeaderUserImageStyle isLogged={isLogged} src={isLogged ? avatar : userSvg} /></Styled.HeaderButtonStyle>
      </Styled.HeaderBoxSizeStyle>
    </Styled.HeaderStyle>
  )
}
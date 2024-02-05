import { HeaderBoxSizeStyle, HeaderButtonStyle, HeaderImagesStyle, HeaderStyle, HeaderUserImageStyle } from "./style";
import headerLogo from "../../assets/LogoHeader.svg"
import userSvg from "../../assets/userImage.svg"
import avatar from "../../assets/avatar@2x.png"
import { useState } from "react";
import Modal from "../InfoModal";

export default function Header(){
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
    return setIsLogged(true)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    <HeaderStyle>
      {isModalOpen && (
        <Modal text="Seja bem vindo!" onClose={closeModal} />
      )}
      <HeaderImagesStyle src={headerLogo} alt="Igma logo header" />
      <HeaderBoxSizeStyle>
        <HeaderButtonStyle isLogged={isLogged} onClick={openModal}><HeaderUserImageStyle isLogged={isLogged} src={isLogged ? avatar: userSvg}/></HeaderButtonStyle>
      </HeaderBoxSizeStyle>
    </HeaderStyle>
  )
}
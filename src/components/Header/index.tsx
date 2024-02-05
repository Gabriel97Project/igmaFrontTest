import { HeaderBoxSizeStyle, HeaderButtonStyle, HeaderImagesStyle, HeaderStyle, HeaderUserImageStyle } from "./style";
import headerLogo from "../../assets/LogoHeader.svg"
import userSvg from "../../assets/userImage.svg"

export default function Header(){
  return(
    <HeaderStyle>
      <HeaderImagesStyle src={headerLogo} alt="Igma logo header" />
      <HeaderBoxSizeStyle>
        <HeaderButtonStyle><HeaderUserImageStyle src={userSvg}/></HeaderButtonStyle>
      </HeaderBoxSizeStyle>
    </HeaderStyle>
  )
}
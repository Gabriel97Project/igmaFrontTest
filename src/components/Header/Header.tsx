import { HeaderStyle } from "./HeaderStyle";
import headerLogo from "../../assets/LogoHeader.svg"


export default function Header(){
  return(
    <HeaderStyle>
      <img src={headerLogo} alt="Igma logo header" />
      
    </HeaderStyle>
  )
}
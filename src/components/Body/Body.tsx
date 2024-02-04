import { 
  BodyStyle,
  SmartphoneAnimationStyle,
  SmartphoneFirstColumnStyle,
  SmartphoneFourthColumnStyle,
  SmartphoneSecoundColumnStyle,
  SmartphoneThirdColumnStyle,
  IgmaPresentationStyle
} from "./BodyStyle";
import smartphoneImageOne from "../../assets/celular1.png";
import smartphoneImageTwo from "../../assets/celular2.png";
import smartphoneImageThree from "../../assets/celular3.png";
import smartphoneImageFour from "../../assets/celular4.png";
import smartphoneImageFive from "../../assets/celular5.png";
import smartphoneImageSix from "../../assets/celular6.png";
import smartphoneImageSeven from "../../assets/celular7.png";
import smartphoneImageEight from "../../assets/celular8.png";
import smartphoneImageNine from "../../assets/celular9.png";
import smartphoneImageTen from "../../assets/celular10.png";
import smartphoneImageEleven from "../../assets/celular11.png";
import smartphoneImageTwelve from "../../assets/celular12.png";
import presentationImage from "../../assets/Image.png"
export default function Body(){
  return(
    <BodyStyle>
      <IgmaPresentationStyle>
       <img src={presentationImage} alt=""/>

       {/* colocar identificaçao alt */}
      </IgmaPresentationStyle>
      <SmartphoneAnimationStyle>
        <SmartphoneFirstColumnStyle>
          <img src={smartphoneImageOne} alt=""/>
          <img src={smartphoneImageTwo} alt=""/>
          <img src={smartphoneImageThree} alt=""/>
        </SmartphoneFirstColumnStyle>
        <SmartphoneSecoundColumnStyle>
          <img src={smartphoneImageFour} alt=""/>
          <img src={smartphoneImageFive} alt=""/>
          <img src={smartphoneImageSix} alt=""/>
        </SmartphoneSecoundColumnStyle>
        <SmartphoneThirdColumnStyle>
          <img src={smartphoneImageSeven} alt=""/>
          <img src={smartphoneImageEight} alt=""/>
          <img src={smartphoneImageNine} alt=""/>
        </SmartphoneThirdColumnStyle>
        <SmartphoneFourthColumnStyle>
          <img src={smartphoneImageTen} alt=""/>
          <img src={smartphoneImageEleven} alt=""/>
          <img src={smartphoneImageTwelve} alt=""/>
        </SmartphoneFourthColumnStyle>

      </SmartphoneAnimationStyle>
    </BodyStyle>
  )
}
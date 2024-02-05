import React from 'react'
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
import {
  
  SmartphoneAnimationStyle,
  SmartphoneFirstColumnStyle,
  SmartphoneFourthColumnStyle,
  SmartphoneMobileSvgAnimationStyle,
  SmartphoneMobileSvgStyle,
  SmartphoneSecoundColumnStyle,
  SmartphoneSvgs,
  SmartphoneThirdColumnStyle
} from './styled';

function SmartphoneImagesContainer() {

  const svImagesMobile: Array<string> = [smartphoneImageTwo, smartphoneImageFive, smartphoneImageEight, smartphoneImageEleven,smartphoneImageTwo, smartphoneImageFive, smartphoneImageEight, smartphoneImageEleven];
  return (




    <SmartphoneAnimationStyle>
      <SmartphoneFirstColumnStyle>
        <SmartphoneSvgs src={smartphoneImageOne} alt="" />
        <SmartphoneSvgs src={smartphoneImageTwo} alt="" />
        <SmartphoneSvgs src={smartphoneImageThree} alt="" />
      </SmartphoneFirstColumnStyle>
      <SmartphoneSecoundColumnStyle>
        <SmartphoneSvgs src={smartphoneImageFour} alt="" />
        <SmartphoneSvgs src={smartphoneImageFive} alt="" />
        <SmartphoneSvgs src={smartphoneImageSix} alt="" />
      </SmartphoneSecoundColumnStyle>
      <SmartphoneThirdColumnStyle>
        <SmartphoneSvgs src={smartphoneImageSeven} alt="" />
        <SmartphoneSvgs src={smartphoneImageEight} alt="" />
        <SmartphoneSvgs src={smartphoneImageNine} alt="" />
      </SmartphoneThirdColumnStyle>
      <SmartphoneFourthColumnStyle>
        <SmartphoneSvgs src={smartphoneImageTen} alt="" />
        <SmartphoneSvgs src={smartphoneImageEleven} alt="" />
        <SmartphoneSvgs src={smartphoneImageTwelve} alt="" />
      </SmartphoneFourthColumnStyle>
      <SmartphoneMobileSvgStyle>
        {svImagesMobile.map (( imageMobileUnit, index) => {
          return  <SmartphoneMobileSvgAnimationStyle key={index} src={imageMobileUnit} alt=""/>

          
        })} 
      </SmartphoneMobileSvgStyle>
    </SmartphoneAnimationStyle>
  )
}

export default SmartphoneImagesContainer
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
import * as Styled from "./styled"

function SmartphoneImagesContainer() {

  const svImagesMobile: Array<string> = [smartphoneImageTwo,
    smartphoneImageFive,
    smartphoneImageEight,
    smartphoneImageEleven,
    smartphoneImageTwo,
    smartphoneImageFive,
    smartphoneImageEight,
    smartphoneImageEleven];

  return (
    <Styled.SmartphoneAnimationStyle>
      <Styled.SmartphoneFirstColumnStyle>
        <Styled.SmartphoneSvgs src={smartphoneImageOne} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageTwo} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageThree} alt="" />
      </Styled.SmartphoneFirstColumnStyle>
      <Styled.SmartphoneSecoundColumnStyle>
        <Styled.SmartphoneSvgs src={smartphoneImageFour} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageFive} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageSix} alt="" />
      </Styled.SmartphoneSecoundColumnStyle>
      <Styled.SmartphoneThirdColumnStyle>
        <Styled.SmartphoneSvgs src={smartphoneImageSeven} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageEight} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageNine} alt="" />
      </Styled.SmartphoneThirdColumnStyle>
      <Styled.SmartphoneFourthColumnStyle>
        <Styled.SmartphoneSvgs src={smartphoneImageTen} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageEleven} alt="" />
        <Styled.SmartphoneSvgs src={smartphoneImageTwelve} alt="" />
      </Styled.SmartphoneFourthColumnStyle>
      <Styled.SmartphoneMobileSvgStyle>
        {svImagesMobile.map((imageMobileUnit, index) => {
          return <Styled.SmartphoneMobileSvgAnimationStyle key={index} src={imageMobileUnit} alt="" />
        })}
      </Styled.SmartphoneMobileSvgStyle>
    </Styled.SmartphoneAnimationStyle>
  )
}

export default SmartphoneImagesContainer
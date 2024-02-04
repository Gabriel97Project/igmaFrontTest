import React from 'react'
import * as Styled from './style'
import presentationImage from "../../assets/Image.png";
import vetorHero from "../../assets/vectorHero.svg"

function IgmaImage() {
  return (
    <Styled.PresentationImageContainer>
      <Styled.VetorImageStyle src={vetorHero}/>
      {/* <img id="vetorImage" src={vetorHero} alt=""/> */}
      <Styled.IgmaPresentationImageBox>

        {/* <div id="igmaPresentationImages"> */}
          {/* <img id="presentationImage" src={presentationImage} alt=""/> */}
          
        <Styled.PresentationImage src={presentationImage} alt="Vulcão em erupção"/>
      </Styled.IgmaPresentationImageBox>
    </Styled.PresentationImageContainer>
    
  )
}

export default IgmaImage
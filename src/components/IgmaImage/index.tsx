import React from 'react'
import * as Styled from './style'
import presentationImage from "../../assets/Image.png";
import vetorHero from "../../assets/vectorHero.svg"

function IgmaImage() {
  return (
    <Styled.PresentationImageContainer>
      <Styled.VetorImageStyle src={vetorHero} />
      <Styled.IgmaPresentationImageBox>
        <Styled.PresentationImage src={presentationImage} alt="Vulcão em erupção" />
      </Styled.IgmaPresentationImageBox>
    </Styled.PresentationImageContainer>

  )
}

export default IgmaImage
import React from 'react'
import * as Styled from "./style"
import SVGGrid from "../LogoGrid";
import mrv from "../../assets/mrv.svg";
import idb from "../../assets/idb.svg";
import comgas from "../../assets/comgas.svg";
import bayer from "../../assets/bayer.svg";
import cvc from "../../assets/cvc.svg";
import centauro from "../../assets/centauro.svg";
import neoEnergia from "../../assets/neoenergia.svg";
import google from "../../assets/google.svg";
import honda from "../../assets/honda.svg";
import ambev from "../../assets/ambev.svg";
import sirioLibanes from "../../assets/hsl.svg";


function GridAndTextContent() {

  const svgs = [mrv, cvc ,idb , comgas, bayer, cvc, centauro, neoEnergia, google, honda, ambev, sirioLibanes];
  
  return (
    <Styled.GridAndTextContentStyle>
      <Styled.GridAndTexResponsiveSizeBox>
        <Styled.GridTextBoxStyle>
          Expressamos mais de 20 anos de experiência criando plataformas digitais para
          as maiores empresas do Brasil, impactando milhões de pessoas.
        </Styled.GridTextBoxStyle>
        <SVGGrid svgs={svgs} sizeSvg={"176px"} />
      </Styled.GridAndTexResponsiveSizeBox>

    </Styled.GridAndTextContentStyle>
  )
}

export default GridAndTextContent;